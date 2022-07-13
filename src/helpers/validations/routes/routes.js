import {Navigate} from 'react-router-dom';

export const ProtectedRoute = ({ user, redirectPath = '/', children }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export const PublicRoute = ({ user, redirectPath = '/dashboard', children }) => {
  if (user) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};
