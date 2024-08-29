import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Api/api';
import { login } from '../store/userSlice';
import './LoginPage.css';

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

    try {
      const response = await loginUser(username, password);
      dispatch(login(response));
      navigate('/profile');
    } catch (error) {
      error = String(error).split('Error: ')
      console.error('Login failure:', error[1]);
      setError('Failed to login. ' + error[1] + '. Please try again.');
    }
  };

  return (
    <div className='container'>
      <div className='row login-page py-5 '>
        <div className='col-md-12 text-center'>
          <p>Melden SIe sich bei Ihrem Konto an</p>

      </div>
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
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Login</button>
      </form>
      </div> 
    </div>
  );
};

export default LoginPage;



