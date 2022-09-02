import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext';

function PrivateRoute({ children }) {
  const { currentUser } = useUserContext();

  if (!currentUser) {
    return <Navigate to='/' />;
  }

  return children;
}

export default PrivateRoute;
