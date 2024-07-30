import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../Api/api';
import { login } from '../store/userSlice';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setError('');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError('');
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    setError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await registerUser(username, email, phone, password);
      dispatch(login(response));
      navigate('/profile');
    } catch (error) {
      error = String(error).split('Error: ')
      console.error('Registration failure:', error[1]);
      setError('Failed to register. '+ error[1] + '. Please try again.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" value={phone} onChange={handlePhoneChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;






// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { registerUser } from '../Api/api';
// import { login } from '../store/userSlice';

// const RegistrationPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//     setError('');
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//     setError('');
//   };

//   const handlePhoneChange = (event) => {
//     setPhone(event.target.value);
//     setError('');
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//     setError('');
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await registerUser(username, email, phone, password);
//       dispatch(login(response));
//       navigate('/profile');
//     } catch (error) {
//       console.error('Registration failure:', error);
//       setError('Failed to register. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input type="text" value={username} onChange={handleUsernameChange} />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={handleEmailChange} />
//         </div>
//         <div>
//           <label>Phone:</label>
//           <input type="text" value={phone} onChange={handlePhoneChange} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </div>
//         {error && <div style={{ color: 'red' }}>{error}</div>}
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationPage;