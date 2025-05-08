import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';

export default function PrivateRoute() {
  const { user } = useAuth();
  
  return user ? <Dashboard/> : <Navigate to="/login" />;
}