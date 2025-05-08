import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { 
  collection, query, where, onSnapshot, addDoc,
  doc, updateDoc, deleteDoc, serverTimestamp 
} from 'firebase/firestore';
import { 
  AppBar, Toolbar, Typography, Button, Container, 
  Grid, Card, CardContent, CardActions, IconButton,
  CircularProgress, Box, Badge, Switch, FormControlLabel
} from '@mui/material';
import { Add, Delete, Edit, CheckCircle, Notifications } from '@mui/icons-material';
import AddTaskModal from './AddTaskModal';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import axios from 'axios';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [newNotifications, setNewNotifications] = useState(0);

  // Fetch tasks from Firestore
  useEffect(() => {
    if (user) {
      const q = query(collection(db, 'tasks'), where('userId', '==', user.uid));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const tasksData = [];
        let notifications = 0;
        
        querySnapshot.forEach((doc) => {
          const task = doc.data();
          tasksData.push({ 
            id: doc.id, 
            ...task,
            dueDate: task.dueDate.toDate() // Convert to JavaScript Date
          });
          
          // Check for overdue tasks
          if (!task.isCompleted && task.dueDate.toDate() < new Date()) {
            notifications++;
          }
        });

        setTasks(tasksData);
        setNewNotifications(notifications);
        setLoading(false);
      });

      return () => unsubscribe();
    }
  }, [user]);

  const handleTaskSubmit = async (taskData) => {
    try {
      if (editingTask) {
        // Update existing task
        await updateDoc(doc(db, 'tasks', editingTask.id), {
          ...taskData,
          updatedAt: serverTimestamp()
        });
      } else {
        // Add new task
        await addDoc(collection(db, 'tasks'), {
          ...taskData,
          userId: user.uid,
          isCompleted: false,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });

        // Send notification email (optional)
        await axios.post('/api/tasks/notify-new', {
          email: user.email,
          taskDetails: {
            title: taskData.title,
            dueDate: taskData.dueDate,
            description: taskData.description
          }
        });
      }
      setOpenModal(false);
      setEditingTask(null);
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteDoc(doc(db, 'tasks', taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const toggleTaskStatus = async (task) => {
    try {
      await updateDoc(doc(db, 'tasks', task.id), {
        isCompleted: !task.isCompleted,
        updatedAt: serverTimestamp()
      });
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* App Bar */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'background.paper' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'text.primary' }}>
            Timetable Scheduler
          </Typography>
          
          <IconButton color="inherit" sx={{ mr: 2 }}>
            <Badge badgeContent={newNotifications} color="error">
              <Notifications color="action" />
            </Badge>
          </IconButton>
          
          <Button 
            variant="contained" 
            startIcon={<Add />}
            onClick={() => {
              setEditingTask(null);
              setOpenModal(true);
            }}
            sx={{ mr: 2 }}
          >
            Add Task
          </Button>
          
          <Button 
            variant="outlined" 
            onClick={logout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 4, flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          Welcome back, {user?.email.split('@')[0]}
        </Typography>
        
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : tasks.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ 
              textAlign: 'center', 
              p: 4, 
              border: '1px dashed', 
              borderColor: 'divider',
              borderRadius: 2
            }}>
              <Typography variant="h6" gutterBottom>
                No tasks found
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                Get started by adding your first task
              </Typography>
              <Button 
                variant="contained" 
                startIcon={<Add />}
                onClick={() => setOpenModal(true)}
              >
                Add Task
              </Button>
            </Box>
          </motion.div>
        ) : (
          <Grid container spacing={3}>
            {tasks.map((task) => (
              <Grid item xs={12} sm={6} md={4} key={task.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      borderLeft: task.isCompleted ? '4px solid #4caf50' : '4px solid #ff9800'
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h6" component="h3">
                          {task.title}
                        </Typography>
                        {task.isCompleted ? (
                          <CheckCircle color="success" />
                        ) : (
                          <Typography 
                            variant="caption" 
                            color={task.dueDate < new Date() ? 'error' : 'text.secondary'}
                          >
                            {task.dueDate < new Date() ? 'Overdue' : 'Pending'}
                          </Typography>
                        )}
                      </Box>
                      
                      <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
                        Due: {format(task.dueDate, 'PPpp')}
                      </Typography>
                      
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        {task.description}
                      </Typography>
                    </CardContent>
                    
                    <CardActions sx={{ justifyContent: 'space-between' }}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={task.isCompleted}
                            onChange={() => toggleTaskStatus(task)}
                            color="primary"
                          />
                        }
                        label={task.isCompleted ? 'Completed' : 'Mark Complete'}
                      />
                      <Box>
                        <IconButton 
                          size="small" 
                          color="primary"
                          onClick={() => {
                            setEditingTask(task);
                            setOpenModal(true);
                          }}
                        >
                          <Edit fontSize="small" />
                        </IconButton>
                        <IconButton 
                          size="small" 
                          color="error"
                          onClick={() => handleDeleteTask(task.id)}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </Box>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      {/* Add/Edit Task Modal */}
      <AddTaskModal 
        open={openModal} 
        onClose={() => {
          setOpenModal(false);
          setEditingTask(null);
        }} 
        onSubmit={handleTaskSubmit}
        task={editingTask}
      />
    </Box>
  );
};

export default Dashboard;