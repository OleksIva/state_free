import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Api/api';
import { login } from '../store/userSlice';
import './LoginPage.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError(''); 
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError(''); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await loginUser(email, password);
      dispatch(login(response));
      navigate('/profile');
    } catch (error) {
      error = String(error).split('Error: ')
      console.error('Login failure:', error[1]);
      setError('Failed to login. ' + error[1] + '. Please try again.');
    }
  };

  return (
    <div className='container login-page'>
      <div >
      
      <div className='row  '>
        <div className='col-md-12 text-title-login d-flex  justify-content-center'>
          <p>Melden Sie sich bei Ihrem Konto an</p>

      </div>
      </div>
      
    
      <form onSubmit={handleSubmit}>
        <div className='row'>
        <div className='col-md-12 '>
       
         
          <input
            type="text"
            value={email}
            onChange={ handleEmailChange}
            className='input-email'
            placeholder='E-Mail'
            
          />
          <i className="bi bi-envelope email-icon"></i>
        </div>
        </div>
        <div className='row'>
        <div className='col-md-12 '>
        <div>
         
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className='input-password'
            placeholder='Password'
          />
        </div>
        </div>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Login</button>
      </form>
      </div>
      </div>
      
    
  );
};

export default LoginPage;



