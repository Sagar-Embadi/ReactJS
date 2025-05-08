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
  Fade,
  Collapse,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

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

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(formData.email, formData.password, formData.name);
      navigate('/login');
    } catch (err) {
      console.error(err);
      setError(err.message);
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
            Create Account
          </Typography>
          
          <Typography variant="body2" color="textSecondary" align="center" paragraph>
            Join us to organize your timetable efficiently
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
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              type="email"
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
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              variant="outlined"
            />
            
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
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                '&:hover': {
                  boxShadow: '0 3px 7px 3px rgba(255, 105, 135, .3)',
                }
              }}
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </Button>
            
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Already have an account?{' '}
              <Link href="/login" underline="hover" sx={{ cursor: 'pointer' }}>
                Log In
              </Link>
            </Typography>
          </Box>
        </StyledPaper>
      </motion.div>
    </StyledContainer>
  );
}