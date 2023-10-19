import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogComponent from '../../components/LogRegComponents/LogComponent';
import RegComponent from '../../components/LogRegComponents/RegComponent';

const Login = () => {
  const [toggleView, setToggleView] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem('registered_users')) || []
  );
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [logUser, setLogUser] = useState({ email: '', password: '' });
  const [regErrors, setFormErrors] = useState({});
  const [logErrors, setLogErrors] = useState({});

  const navigate = useNavigate();

  const handleInput = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setFormErrors({ ...regErrors, [e.target.name]: '' });
  };

  const validateRegForm = () => {
    const errors = {};
    for (const key in user) {
      if (user[key].trim() === '') {
        errors[key] = `${key} is required`;
      }
    }
    if (
      user.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)
    ) {
      errors.email = 'Invalid email adress';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRegisterUser = e => {
    e.preventDefault();
    if (validateRegForm()) {
      setRegisteredUsers([...registeredUsers, user]);
      setTimeout(() => {
        setToggleView(!toggleView);
      }, 500);
      setUser({ name: '', email: '', password: '' });
    }
  };
  useEffect(() => {
    localStorage.setItem('registered_users', JSON.stringify(registeredUsers));
  }, [registeredUsers]);

  const inputLogUser = e => {
    setLogUser({ ...logUser, [e.target.name]: e.target.value });
    setLogErrors({ ...logErrors, [e.target.name]: '' });
  };

  const validateLogForm = () => {
    const errors = {};
    for (const key in logUser) {
      if (logUser[key].trim() === '') {
        errors[key] = `${key} is required`;
      }
    }
    if (
      logUser.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(logUser.email)
    ) {
      errors.email = 'Invalid email adress';
    }
    setLogErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleLogUser = e => {
    e.preventDefault();
    if (validateLogForm()) {
      let filteredUser = registeredUsers.filter(
        registeredUser =>
          registeredUser.email === logUser.email &&
          registeredUser.password === logUser.password
      );
      if (filteredUser.length > 0) {
        localStorage.setItem('loggedUser', JSON.stringify(...filteredUser));
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
      setLogUser({ email: '', password: '' });
    }
  };

  return (
    <div>
      {toggleView ? (
        <RegComponent
          regErrors={regErrors}
          handleRegisterUser={handleRegisterUser}
          handleInput={handleInput}
          setToggleView={setToggleView}
          toggleView={toggleView}
        />
      ) : (
        <LogComponent
          logErrors={logErrors}
          handleLogUser={handleLogUser}
          inputLogUser={inputLogUser}
          logUser={logUser}
          setToggleView={setToggleView}
          toggleView={toggleView}
        />
      )}
    </div>
  );
};

export default Login;
