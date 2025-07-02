import React from 'react';
import './OccasionPage.css';

const CanadaDay: React.FC = () => {
  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Canada Day Celebrations</h1>
            <p className="lead">Celebrate Canadian pride with patriotic parties featuring red and white themes and national spirit.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="occasion-content">
            <div className="occasion-gallery">
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Backyard BBQ" />
                  <div className="gallery-item-content">
                    <h4>Backyard BBQ</h4>
                    <p>Classic Canadian barbecue celebrations with maple leaf decorations and outdoor fun</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Community Festival" />
                  <div className="gallery-item-content">
                    <h4>Community Festival</h4>
                    <p>Large gatherings celebrating Canadian heritage with games, music, and local culture</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Fireworks Party" />
                  <div className="gallery-item-content">
                    <h4>Fireworks Party</h4>
                    <p>Evening celebrations with spectacular fireworks displays and Canadian pride</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="occasion-details">
              <h2>Why Choose Us for Canada Day?</h2>
              <div className="detail-list">
                <div className="detail-item">
                  <div className="detail-icon">🍁</div>
                  <div>
                    <h4>Patriotic Planning</h4>
                    <p>Every Canada Day celebration showcases Canadian pride and national spirit.</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">🎯</div>
                  <div>
                    <h4>Attention to Detail</h4>
                    <p>From maple leaf motifs to red and white themes, we perfect every patriotic detail.</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">🤝</div>
                  <div>
                    <h4>Full Support</h4>
                    <p>Our team ensures your Canada Day celebration brings communities together.</p>
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
            <h2>Our Canada Day Services</h2>
            <div className="services-grid">
              <div className="service-item">
                <h4>Event Design</h4>
                <p>Patriotic themes celebrating Canadian heritage and national pride</p>
              </div>
              <div className="service-item">
                <h4>Venue Selection</h4>
                <p>Finding perfect outdoor locations for your Canada Day celebration</p>
              </div>
              <div className="service-item">
                <h4>Vendor Coordination</h4>
                <p>Managing all suppliers and service providers for your patriotic event</p>
              </div>
              <div className="service-item">
                <h4>Day-of Coordination</h4>
                <p>Ensuring everything runs smoothly for your national celebration</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CanadaDay;