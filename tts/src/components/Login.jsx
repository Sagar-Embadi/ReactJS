import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Link, 
  Divider, 
  Alert,
  Collapse,
  IconButton,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import GoogleIcon from '@mui/icons-material/Google';

const StyledContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  });
  
  const StyledPaper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
    backgroundColor: 'white',
    width: '100%',
    maxWidth: '450px',
  }));
  
export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'remember' ? checked : value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      await login(formData.email, formData.password);
      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Failed to log in. Please check your credentials.');
    }
    setLoading(false);
  }

  return (
    <StyledContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <StyledPaper>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Welcome Back
          </Typography>
          
          <Typography variant="body2" color="textSecondary" align="center" paragraph>
            Sign in to manage your timetable
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Collapse in={!!error}>
            <Alert 
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => setError('')}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              {error}
            </Alert>
          </Collapse>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
            />
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox 
                    name="remember" 
                    color="primary" 
                    checked={formData.remember}
                    onChange={handleChange}
                  />
                }
                label="Remember me"
              />
              
              <Link href="/forgot-password" variant="body2">
                Forgot password?
              </Link>
            </Box>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{ 
                mt: 3, 
                mb: 2,
                py: 1.5,
                fontSize: '1rem',
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                '&:hover': {
                  boxShadow: '0 3px 7px 3px rgba(33, 203, 243, .3)',
                }
              }}
            >
              {loading ? 'Logging In...' : 'Sign In'}
            </Button>
            
            <Divider sx={{ my: 2 }}>OR</Divider>
            
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{ 
                mb: 2,
                py: 1.5,
                color: '#DB4437',
                borderColor: '#DB4437',
                '&:hover': {
                  borderColor: '#DB4437',
                  backgroundColor: 'rgba(219, 68, 55, 0.04)'
                }
              }}
            >
              Continue with Google
            </Button>
            
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Don't have an account?{' '}
              <Link href="/signup" underline="hover" sx={{ cursor: 'pointer' }}>
                Sign Up
              </Link>
            </Typography>
          </Box>
        </StyledPaper>
      </motion.div>
    </StyledContainer>
  );
}