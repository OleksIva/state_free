import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import LoginPage from './views/LoginPage';
import RegistrationPage from './views/RegistrationPage';
import ProfilePage from './views/ProfilePage';
import OverviewPage from './views/OverviewPage';
import AssessmentPage from './views/AssessmentPage';
import ResourcesPage from './views/ResourcesPage';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/stayles/App.scss';
import TRANSPARENZ from './views/Transparenz';
import Kontakt from './components/Kontakt/Kontakt';
import FAQPage from './views/FAQPage';

function App() {
  const [user, setUser] = useState(true);

  return (
    <div className='App'>
      <Navigation user={user} />
      <main className='flex-grow-1'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="ResourcesPage" element={<ResourcesPage />} />
          <Route path="/assignment" element={<div>Assignment Page</div>} />
          <Route path="/FAQPage" element={<FAQPage/>} />   
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/assessment/*" element={<AssessmentPage />} />
          <Route path="/blog" element={<div>Blog Page</div>} />
          <Route path="/about" element={<div>About Us Page</div>} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/transparenz" element={<TRANSPARENZ />} />
          <Route path="/contact" element={<Kontakt />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;