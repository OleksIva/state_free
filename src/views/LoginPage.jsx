import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../Api/api';
import { login } from '../store/userSlice';

// import { test } from '../Api/api';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setError(''); 
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError(''); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // // Reg expressions for login and password validation
    // const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    // const passwordRegex = /^(?=.*[!@#$%^&*])(?=.{8,})/;

    // // Login validation
    // if (!usernameRegex.test(username)) {
    //   setError('Incorrect login. Username should contain 3-16 characters');
    //   return;
    // }

    // // Pwd validation
    // if (!passwordRegex.test(password)) {
    //   setError('Incorrect password. Should contain at least 8 characters and one of the following symbols: !@#$%^&*');
    //   return;
    // }

    try {
      const response = await registerUser('Alex', 'alex@gmail.com', '093575792443', '12345>ds')
      dispatch(login(response));
      navigate('/profile')
      
      // TODO - 
      // if (response.ok) {
      //   // Success
      //   console.log('Data was succesfully sent to server');
      // } else {
      //   // Error
      //   console.error('Login failure:', response.statusText);
      //   setError('Failed to login. Please try again.');
      // }
    } catch (error) {
      console.error('Login failure:', error);
      setError('Failed to login. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {error && <div style={{ color: 'white' }}>{error}</div>}
        <button type="submit">Login</button>
      </form> 
    </div>
  );
};

export default LoginPage;
