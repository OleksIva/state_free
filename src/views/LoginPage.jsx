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
      error = String(error).split('Error: ');
      console.error('Login failure:', error[1]);
      setError('Failed to login. ' + error[1] + '. Please try again.');
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className='container login-page'>
      <div>
        <div className='row'>
          <div className='col-md-12 d-flex justify-content-center'>
            <p className='text-title-login'>Melden Sie sich bei Ihrem Konto an</p>
          </div>
        </div>
      
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-md-12'>
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                className='input-email'
                placeholder='E-Mail'
              />
              <i className="bi bi-envelope email-icon"></i>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className='input-password'
                placeholder='Password'
              />
            </div>
          </div>
          <div className='row'>
            <div className="form-check col-6">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="text-checkbox" htmlFor="defaultCheck1">
                Eingeloggt bleiben
              </label>
            </div>
            <div className="col-6">
              <p className="forgot-password" onClick={handleForgotPassword}>Passwort vergessen?</p>
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="w-50 col-12">
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button
                  type="submit"
                  className="btn-home-einlogen-login rounded-pill"
                >
                  Einloggen
                </button>
              </div>
              <div className='row'>
                <div className='col-12 d-flex justify-content-center'>
                  <div className='text-register-loinpage'>
                    haben Sie noch kein Konto?
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <button
                    type="button"
                    className="rounded-pill btn-home-register-loinpage"
                    onClick={() => navigate("/register")}
                  >
                    Registerieren
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
