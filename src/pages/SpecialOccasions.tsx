import React from 'react';
import { Link } from 'react-router-dom';
import './OccasionPage.css';

const SpecialOccasions: React.FC = () => {
  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Special Occasions</h1>
            <p className="lead">Create unforgettable moments for unique celebrations and once-in-a-lifetime events that deserve special attention.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="occasion-content">
            <div className="occasion-gallery">
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Corporate Events" />
                  <div className="gallery-item-content">
                    <h4>Corporate Events</h4>
                    <p>Professional celebrations for company milestones, launches, and business achievements</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Milestone Celebrations" />
                  <div className="gallery-item-content">
                    <h4>Milestone Celebrations</h4>
                    <p>Unique events marking significant life achievements and personal milestones</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Custom Themes" />
                  <div className="gallery-item-content">
                    <h4>Custom Themes</h4>
                    <p>Personalized celebrations with completely custom themes tailored to your vision</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="occasion-details">
              <h2>Why Choose Us for Special Occasions?</h2>
              <div className="detail-list">
                <div className="detail-item">
                  <div className="detail-icon">⭐</div>
                  <div>
                    <h4>Unique Planning</h4>
                    <p>Every special occasion is planned with creativity to match your unique vision.</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">🎯</div>
                  <div>
                    <h4>Attention to Detail</h4>
                    <p>From concept to execution, we ensure every element reflects your special moment.</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">🤝</div>
                  <div>
                    <h4>Full Support</h4>
                    <p>Our team brings your most ambitious celebration ideas to life perfectly.</p>
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
            <h2>Our Special Occasion Services</h2>
            <div className="services-grid">
              <div className="service-item">
                <h4>Event Design</h4>
                <p>Custom creative themes designed specifically for your unique celebration</p>
              </div>
              <div className="service-item">
                <h4>Venue Selection</h4>
                <p>Finding distinctive locations that match your special occasion vision</p>
              </div>
              <div className="service-item">
                <h4>Vendor Coordination</h4>
                <p>Managing specialized suppliers and service providers for unique events</p>
              </div>
              <div className="service-item">
                <h4>Day-of Coordination</h4>
                <p>Ensuring every detail of your special occasion unfolds flawlessly</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialOccasions;