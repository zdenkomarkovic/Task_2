import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthUtils = ({ children }) => {
  const isLoggedUser = () => {
    if (localStorage.hasOwnProperty('loggedUser')) {
      return localStorage.getItem('loggedUser');
    }
  };
  return isLoggedUser() ? children : <Navigate to={'login'} />;
};

export default AuthUtils;
