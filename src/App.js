import '../src/styles/App.scss';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing_page from './pages/Landing_page';
import Registration_page from './pages/Registration_page';
import Login_page from './pages/Login_page';

function App() {
  return (
    <div className="App">
    <Home />
     <h1>Checking</h1>
     <Routes>
      <Route path='/' element={<Landing_page />} />
      <Route  path='/register' element={<Registration_page />} />
      <Route  path='/login' element={<Login_page />} />
     </Routes>
    </div>
  );
}

export default App;