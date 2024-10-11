// import React from 'react'
// import { Link } from 'react-router-dom';
// import './navigation.css';

// function Navigation({ user }) {
//     if (!user) {
//         return null
//     }

//     return (
//         <div className='pg-0'>
//             <nav>
//                 <img src="https://ik.imagekit.io/lnmtrplsk/image%201.png?updatedAt=1721816809003" alt="logo" />

//                 <ul>
//                     <li><Link to="/">Startseite</Link></li>
//                     <li><Link to="/faqpage">FAQ</Link></li>
//                     <li><Link to="/about">Über uns</Link></li>
//                     <li><Link className='anmeldenButton' to="/login">Anmelden</Link></li>
//                     <li><Link className='registrierenButton' to="/register">Registrieren</Link></li>
//                 </ul>
//             </nav>
//         </div>
//     )
// }

// export default Navigation




import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/userSlice'; // Import logout action
import './navigation.css';

function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.userInfo.loggedIn); // Access login state from Redux

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    localStorage.removeItem('user'); // Remove user from localStorage
    navigate('/'); // Redirect to home
  };

  return (
    <div className="pg-0">
      <nav>
        <img src="https://ik.imagekit.io/lnmtrplsk/image%201.png?updatedAt=1721816809003" alt="logo" />
        <ul>
          <li><Link to="/">Startseite</Link></li>
          <li><Link to="/faqpage">FAQ</Link></li>
          <li><Link to="/about">Über uns</Link></li>

          {loggedIn ? (
            <li>
              <button className="btn btn-logout" onClick={handleLogout}>
                Sign Out
              </button>
            </li>
          ) : (
            <>
              <li><Link className="anmeldenButton" to="/login">Anmelden</Link></li>
              <li><Link className="registrierenButton" to="/register">Registrieren</Link></li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;

