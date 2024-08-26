import '../src/styles/App.scss';
import { Route, Routes, Router } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import LoginPage from './views/LoginPage';
import RegistrationPage from './views/RegistrationPage';
import React, { useState } from 'react';
import ProtectedRoutes from './views/ProtectedRoutes';
import ProfilePage from './views/ProfilePage';
import OverviewPage from './views/OverviewPage';
import AssessmentPage from './views/AssessmentPage';
import ResourcesPage from './views/ResourcesPage';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  /** useState to set user and create protected routes */
  const [user, setUser] = useState(true);

  return (
    <div className="App">
      <Navigation user={user} />
    
        {/* <Header /> */}
     <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="ResourcesPage" element={<ResourcesPage />} />
          <Route path="/assessment/*" element={<AssessmentPage />} />
          <Route path="/faq" element={<div>FAQ Page</div>} />
          <Route path="/blog" element={<div>Blog Page</div>} />
          <Route path="/about" element={<div>About Us Page</div>} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
        <Footer/>
    </div>

  );
}

export default App;