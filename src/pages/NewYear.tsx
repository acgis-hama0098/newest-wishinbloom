import React from 'react';
import { Link } from 'react-router-dom';
import './OccasionPage.css';

const NewYear: React.FC = () => {
  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>New Year Celebrations</h1>
            <p className="lead">Ring in the new year with spectacular celebrations that create lasting memories and new beginnings.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="occasion-content">
            <div className="occasion-gallery">
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="New Year's Eve Party" />
                  <div className="gallery-item-content">
                    <h4>New Year's Eve Party</h4>
                    <p>Glamorous countdown celebrations with champagne, confetti, and midnight magic</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="New Year's Day Brunch" />
                  <div className="gallery-item-content">
                    <h4>New Year's Day Brunch</h4>
                    <p>Fresh start celebrations with elegant brunch settings and hopeful decorations</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Resolution Party" />
                  <div className="gallery-item-content">
                    <h4>Resolution Party</h4>
                    <p>Inspiring celebrations focused on new goals and fresh beginnings for the year ahead</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="occasion-services">
            <h2>Our New Year Services</h2>
            <div className="services-grid">
              <div className="service-item">
                <h4>Event Design</h4>
                <p>Glittering themes and decorations perfect for new year celebrations</p>
              </div>
              <div className="service-item">
                <h4>Venue Selection</h4>
                <p>Finding the perfect location for your countdown celebration</p>
              </div>
              <div className="service-item">
                <h4>Vendor Coordination</h4>
                <p>Managing all suppliers and service providers for your event</p>
              </div>
              <div className="service-item">
                <h4>Day-of Coordination</h4>
                <p>Ensuring everything runs perfectly for your New Year celebration</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewYear;