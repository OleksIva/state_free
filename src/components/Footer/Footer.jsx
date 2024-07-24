import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className='left-content'>
          <img src="https://ik.imagekit.io/lnmtrplsk/image%202.png?updatedAt=1721822493760" alt="logo" />
          <p>A COMMUNITY FOR STATELESS PEOPLE AND THEIR ALLIES</p>
        </div>
      </div>
      <div className="footer-right">
        <div className='right-content'>
          <ul>
            <li><Link to="about">About</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link>Community</Link></li>
            <li><Link>Kontakt</Link></li>
            <li><Link>Nutzungsbedinungen</Link></li>
            <li><Link>Datenschutz</Link></li>
            <li><Link>Impressum</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;