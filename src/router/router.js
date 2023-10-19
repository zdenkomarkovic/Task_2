import React, { lazy } from 'react';

import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import Error from '../pages/Error/Error';

import Login from '../pages/Login/Login';

import AuthUtils from '../utils/AuthUtils';
import Home from '../pages/Home/Home';

const About = lazy(() => import('../pages/About/About'));
const Posts = lazy(() => import('../pages/Posts/Posts'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const Users = lazy(() => import('../pages/Users/Users'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: (
          <AuthUtils>
            <Home />
          </AuthUtils>
        ),
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'posts',
        element: <Posts />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);
