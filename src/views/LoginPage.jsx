import React, { useState } from 'react';

const LoginPage = () => {
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

    // Reg expressions for login and password validation
    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.{8,})/;

    // Login validation
    if (!usernameRegex.test(username)) {
      setError('Incorrect login. Should contain 3-16 characters');
      return;
    }

    // Pwd validation
    if (!passwordRegex.test(password)) {
      setError('Incorrect password. Should contain at least 8 characters and one of the following symbols: !@#$%^&*');
      return;
    }

    try {
      const response = await fetch('url_to_your_backend_endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        // Success
        console.log('Data was succesfully sent to server');
      } else {
        // Error
        console.error('Login failure:', response.statusText);
        setError('Failed to login. Please try again.');
      }
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
