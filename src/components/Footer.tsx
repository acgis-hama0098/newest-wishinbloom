
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Occasions</h3>
            <p>Celebrating life's special moments with you.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Popular Occasions</h4>
            <ul className="footer-links">
              <li><a href="/occasion/wedding">Weddings</a></li>
              <li><a href="/occasion/birthday">Birthdays</a></li>
              <li><a href="/occasion/anniversary">Anniversaries</a></li>
              <li><a href="/occasion/graduation">Graduations</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <p>Follow us for inspiration and updates</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Pinterest">📌</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Occasions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
