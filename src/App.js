import '../src/styles/App.scss';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing_page from './components/Landing_page';
import Registration_page from './components/Registration_page';
import Login_page from './components/Login_page';
import React, { useState } from 'react';
import ProtectedRoutes from './components/ProtectedRoutes';
import Profile_page from './components/Profile_page';
import Overview_page from './components/Overview_page';
import Resources_page from './components/Resources_page';
import NV from './components/NV';

function App() {
  
  const [user, setUser] = useState(true);
  
  return (
    <div className="App">
    <Home />
     <h1>Checking</h1>

      <NV user={user} />

     <Routes>
      <Route path='/' element={<Landing_page />} />
      <Route  path='/register' element={<Registration_page />} />
      <Route  path='/login' element={<Login_page />} />

      <Route path='/profile' element={<ProtectedRoutes user={user} > <Profile_page/> </ProtectedRoutes>} />
      <Route path='/overview' element={<ProtectedRoutes user={user} > <Overview_page/> </ProtectedRoutes>} />
      <Route path='/resources' element={<ProtectedRoutes user={user} > <Resources_page/> </ProtectedRoutes>} />
     </Routes>
    </div>
  );
}

export default App;