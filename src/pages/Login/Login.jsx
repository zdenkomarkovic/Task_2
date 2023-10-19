import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogComponent from '../../components/LogRegComponents/LogComponent';
import RegComponent from '../../components/LogRegComponents/RegComponent';

const Login = () => {
  const [toggleView, setToggleView] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem('registered_users')) || []
  );
  const [user, setUser] = useState({});
  const [logUser, setLogUser] = useState({ email: '', password: '' });
  // const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleInput = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleRegisterUser = e => {
    e.preventDefault();
    if (!user.name || !user.email || !user.password) {
      alert('Niste uneli sve podatke');
    } else {
      setRegisteredUsers([...registeredUsers, user]);
    }
    setTimeout(() => {
      setToggleView(!toggleView);
    }, 500);
  };
  useEffect(() => {
    localStorage.setItem('registered_users', JSON.stringify(registeredUsers));
  }, [registeredUsers]);

  const inputLogUser = e => {
    setLogUser({ ...logUser, [e.target.name]: e.target.value });
  };

  const handleLogUser = e => {
    e.preventDefault();
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
  };

  return (
    <div>
      {toggleView ? (
        <RegComponent
          handleRegisterUser={handleRegisterUser}
          handleInput={handleInput}
          setToggleView={setToggleView}
          toggleView={toggleView}
        />
      ) : (
        <LogComponent
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
