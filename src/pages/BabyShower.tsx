import React from 'react';
import { Link } from 'react-router-dom';
import './OccasionPage.css';

const BabyShower: React.FC = () => {
  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Baby Shower Celebrations</h1>
            <p className="lead">Welcome new arrivals with beautiful baby shower celebrations filled with joy, love, and anticipation.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="occasion-content">
            <div className="occasion-gallery">
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Traditional Baby Shower" />
                  <div className="gallery-item-content">
                    <h4>Traditional Baby Shower</h4>
                    <p>Classic celebrations with games, gifts, and sweet decorations for expecting parents</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Gender Reveal Party" />
                  <div className="gallery-item-content">
                    <h4>Gender Reveal Party</h4>
                    <p>Exciting celebrations revealing baby's gender with creative and memorable surprises</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Co-ed Baby Shower" />
                  <div className="gallery-item-content">
                    <h4>Co-ed Baby Shower</h4>
                    <p>Modern celebrations including both parents and all friends in welcoming baby</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="occasion-details">
              <h2>Why Choose Us for Baby Showers?</h2>
              <div className="detail-list">
                <div className="detail-item">
                  <div className="detail-icon">👶</div>
                  <div>
                    <h4>Loving Planning</h4>
                    <p>Every baby shower is planned with care to celebrate the miracle of new life.</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">🍼</div>
                  <div>
                    <h4>Attention to Detail</h4>
                    <p>From nursery themes to sweet treats, we create the perfect welcoming atmosphere.</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">💝</div>
                  <div>
                    <h4>Full Support</h4>
                    <p>Our team ensures your baby shower is stress-free and filled with joy.</p>
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
            <h2>Our Baby Shower Services</h2>
            <div className="services-grid">
              <div className="service-item">
                <h4>Event Design</h4>
                <p>Sweet themes and decorations perfect for welcoming baby</p>
              </div>
              <div className="service-item">
                <h4>Venue Selection</h4>
                <p>Finding the perfect cozy location for your baby celebration</p>
              </div>
              <div className="service-item">
                <h4>Vendor Coordination</h4>
                <p>Managing all suppliers and service providers for your shower</p>
              </div>
              <div className="service-item">
                <h4>Day-of Coordination</h4>
                <p>Ensuring everything runs smoothly for this special celebration</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BabyShower;