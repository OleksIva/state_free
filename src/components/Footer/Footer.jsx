import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left-content">
          <p>&copy; 2024 My Company</p>
          <input type="text" placeholder="Your name" className="footer-input" />
          <textarea placeholder="Your message" className="footer-textarea"></textarea>
          <button className="contact-button">Contact Us</button>
        </div>
        <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        <nav className="right-content">
          <ul className="footer-links">
            <div className="support-section">
              <h1>Support</h1>
              <div className="support-content">
                <p>Help</p>
                <p>Date</p>
                <p>About</p>
              </div>
            </div>
            <div className="support-section">
              <h1>Support</h1>
              <div className="support-content">
                <p>Help</p>
                <p>Date</p>
                <p>About</p>
              </div>
            </div>
            <div className="support-section">
              <h1>Support</h1>
              <div className="support-content">
                <p>Help</p>
                <p>Date</p>
                <p>About</p>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;