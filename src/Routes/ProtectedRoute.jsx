// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context';

export const ProtectedRoute = ({ children }) => {  // Fix: Destructure children
  const { isAuthenticated } = useAuth();

  console.log('isAuthenticated', isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
