import React from 'react';
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
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="New Year's Day Brunch" />
                  <div className="gallery-item-content">
                    <h4>New Year's Day Brunch</h4>
                    <p>Fresh start celebrations with elegant brunch settings and hopeful decorations</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Resolution Party" />
                  <div className="gallery-item-content">
                    <h4>Resolution Party</h4>
                    <p>Inspiring celebrations focused on new goals and fresh beginnings for the year ahead</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="occasion-details">
              <h2>Why Choose Us for New Year?</h2>
              <div className="detail-list">
                <div className="detail-item">
                  <div className="detail-icon">🎊</div>
                  <div>
                    <h4>Spectacular Planning</h4>
                    <p>Every New Year celebration is designed to create unforgettable countdown moments.</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">✨</div>
                  <div>
                    <h4>Attention to Detail</h4>
                    <p>From midnight countdowns to champagne toasts, we perfect every celebration detail.</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">🥂</div>
                  <div>
                    <h4>Full Support</h4>
                    <p>Our team ensures your New Year celebration is seamless and spectacular.</p>
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