import '../src/styles/App.scss';
import Home from './views/Home';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import RegistrationPage from './views/RegistrationPage';
import LoginPage from './views/LoginPage';
import React, { useState } from 'react';
import ProtectedRoutes from './views/ProtectedRoutes';
import ProfilePage from './views/ProfilePage';
import OverviewPage from './views/OverviewPage';
import ResourcesPage from './views/ResourcesPage';
import NV from './views/Navigation';


function App() {

  const [user, setUser] = useState(true);

  return (
    <div className="App">
      <Home />
      <h1>Checking</h1>
      <NV user={user} />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<RegistrationPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProtectedRoutes user={user} > <ProfilePage /> </ProtectedRoutes>} />
        <Route path='/overview' element={<ProtectedRoutes user={user} > <OverviewPage /> </ProtectedRoutes>} />
        <Route path='/resources' element={<ProtectedRoutes user={user} > <ResourcesPage /> </ProtectedRoutes>} />
      </Routes>
    </div>
  );
}

export default App;