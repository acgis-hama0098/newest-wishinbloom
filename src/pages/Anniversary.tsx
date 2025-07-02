import React from 'react';
import { Link } from 'react-router-dom';
import './OccasionPage.css';

const Anniversary: React.FC = () => {
  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Anniversary Celebrations</h1>
            <p className="lead">Celebrate your milestones with beautifully planned anniversary celebrations that honor your journey together.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="occasion-content">
            <div className="occasion-gallery">
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Wedding Anniversary" />
                  <div className="gallery-item-content">
                    <h4>Wedding Anniversary</h4>
                    <p>Elegant celebrations marking years of love and commitment with personalized touches</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Milestone Anniversary" />
                  <div className="gallery-item-content">
                    <h4>Milestone Anniversary</h4>
                    <p>Special celebrations for significant anniversaries like 25th, 50th, and golden years</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Renewal Ceremony" />
                  <div className="gallery-item-content">
                    <h4>Renewal Ceremony</h4>
                    <p>Vow renewal ceremonies with family and friends to celebrate enduring love</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="occasion-details">
              <h2>Why Choose Us for Anniversaries?</h2>
              <div className="detail-list">
                <div className="detail-item">
                  <div className="detail-icon">💍</div>
                  <div>
                    <h4>Meaningful Planning</h4>
                    <p>Every anniversary celebration is designed to honor your unique love story.</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">🎯</div>
                  <div>
                    <h4>Attention to Detail</h4>
                    <p>From photo displays to memory tables, we capture your journey beautifully.</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">🤝</div>
                  <div>
                    <h4>Full Support</h4>
                    <p>Our team ensures your anniversary celebration is stress-free and memorable.</p>
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
            <h2>Our Anniversary Services</h2>
            <div className="services-grid">
              <div className="service-item">
                <h4>Event Design</h4>
                <p>Custom themes reflecting your years together and shared memories</p>
              </div>
              <div className="service-item">
                <h4>Venue Selection</h4>
                <p>Finding the perfect location to celebrate your milestone</p>
              </div>
              <div className="service-item">
                <h4>Vendor Coordination</h4>
                <p>Managing all suppliers and service providers for your celebration</p>
              </div>
              <div className="service-item">
                <h4>Day-of Coordination</h4>
                <p>Ensuring everything runs smoothly on your special anniversary</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Anniversary;