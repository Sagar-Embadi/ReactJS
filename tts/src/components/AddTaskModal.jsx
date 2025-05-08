import { useState, useEffect } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Divider,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const AddTaskModal = ({ open, onClose, onSubmit, task }) => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    dueDate: dayjs(),
    isCompleted: false
  });

  // Initialize form when task prop changes
  useEffect(() => {
    if (task) {
      setTaskData({
        title: task.title,
        description: task.description,
        dueDate: dayjs(task.dueDate),
        isCompleted: task.isCompleted || false
      });
    } else {
      // Reset form when adding new task
      setTaskData({
        title: '',
        description: '',
        dueDate: dayjs(),
        isCompleted: false
      });
    }
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...taskData,
      dueDate: taskData.dueDate.toDate() // Convert to JavaScript Date
    });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: '80%', md: '600px' },
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 2,
          p: 4,
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" component="h2">
              {task ? 'Edit Task' : 'Add New Task'}
            </Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          
          <Divider sx={{ mb: 3 }} />
          
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                required
                fullWidth
                label="Task Title"
                name="title"
                value={taskData.title}
                onChange={handleChange}
              />
              
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Description"
                name="description"
                value={taskData.description}
                onChange={handleChange}
              />
              
              <DateTimePicker
                label="Due Date"
                value={taskData.dueDate}
                onChange={(newValue) => setTaskData({...taskData, dueDate: newValue})}
                minDate={dayjs()}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
              
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button onClick={onClose} variant="outlined">
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  variant="contained" 
                >
                  {task ? 'Update Task' : 'Add Task'}
                </Button>
              </Box>
            </Stack>
          </form>
        </Box>
      </LocalizationProvider>
    </Modal>
  );
};

export default AddTaskModal;