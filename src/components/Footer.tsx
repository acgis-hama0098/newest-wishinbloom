
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Occasions</h3>
            <p>{t('footer.tagline')}</p>
          </div>
          
          <div className="footer-section">
            <h4>{t('footer.quickLinks')}</h4>
            <ul className="footer-links">
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/about">{t('nav.about')}</Link></li>
              <li><Link to="/contact">{t('nav.contact')}</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>{t('footer.policies')}</h4>
            <ul className="footer-links">
              <li><Link to="/privacy-policy">{t('footer.privacyPolicy')}</Link></li>
              <li><Link to="/terms-of-service">{t('footer.termsOfService')}</Link></li>
              <li><Link to="/return-policy">{t('footer.returnPolicy')}</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>{t('footer.connect')}</h4>
            <p>{t('footer.followUs')}</p>
            <div className="social-links">
              <a 
                href="https://www.instagram.com/wishin_bloom" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.facebook.com/wishinbloom" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Occasions. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
