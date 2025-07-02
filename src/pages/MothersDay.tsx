
import React from 'react';
import './OccasionPage.css';

const MothersDay: React.FC = () => {
  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Mother's Day Celebrations</h1>
            <p className="lead">Honor the special mothers in your life with thoughtful and heartwarming celebrations.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="occasion-content">
            <div className="occasion-gallery">
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Elegant Mother's Day Brunch" />
                  <div className="gallery-item-content">
                    <h4>Elegant Mother's Day Brunch</h4>
                    <p>Beautiful brunch celebrations with elegant table settings and delicious food</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Garden Tea Party" />
                  <div className="gallery-item-content">
                    <h4>Garden Tea Party</h4>
                    <p>Charming outdoor tea parties surrounded by beautiful flowers and nature</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Family Gathering" />
                  <div className="gallery-item-content">
                    <h4>Family Gathering</h4>
                    <p>Intimate family celebrations that bring everyone together to honor mom</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="occasion-details">
              <h2>Why Choose Us for Mother's Day?</h2>
              <div className="detail-list">
                <div className="detail-item">
                  <div className="detail-icon">✨</div>
                  <div>
                    <h4>Personalized Planning</h4>
                    <p>Every mother is unique, and we tailor our services to create the perfect celebration for her.</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">🎯</div>
                  <div>
                    <h4>Attention to Detail</h4>
                    <p>From the smallest decorative touches to major logistics, we ensure everything is perfect.</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">🤝</div>
                  <div>
                    <h4>Full Support</h4>
                    <p>Our team is with you every step of the way, from initial planning to the final celebration.</p>
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
            <h2>Our Mother's Day Services</h2>
            <div className="services-grid">
              <div className="service-item">
                <h4>Event Design</h4>
                <p>Custom themes and decorations that reflect your style</p>
              </div>
              <div className="service-item">
                <h4>Venue Selection</h4>
                <p>Finding the perfect location for your celebration</p>
              </div>
              <div className="service-item">
                <h4>Vendor Coordination</h4>
                <p>Managing all suppliers and service providers</p>
              </div>
              <div className="service-item">
                <h4>Day-of Coordination</h4>
                <p>Ensuring everything runs smoothly on your special day</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MothersDay;
