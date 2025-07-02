
import React from 'react';
import './OccasionPage.css';

const Halloween: React.FC = () => {
  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Halloween Celebrations</h1>
            <p className="lead">Create spooktacular Halloween memories with our creative and fun celebration planning services.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="occasion-content">
            <div className="occasion-gallery">
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Halloween Party" />
                  <div className="gallery-item-content">
                    <h4>Halloween Party</h4>
                    <p>Spooky and fun Halloween parties with creative decorations and themed activities</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Haunted House Experience" />
                  <div className="gallery-item-content">
                    <h4>Haunted House Experience</h4>
                    <p>Thrilling haunted house setups that create unforgettable scary experiences</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Costume Contest Event" />
                  <div className="gallery-item-content">
                    <h4>Costume Contest Event</h4>
                    <p>Exciting costume contests with prizes and entertainment for all ages</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="occasion-details">
              <h2>Why Choose Us for Halloween?</h2>
              <div className="detail-list">
                <div className="detail-item">
                  <div className="detail-icon">✨</div>
                  <div>
                    <h4>Personalized Planning</h4>
                    <p>Every Halloween celebration is unique, and we tailor our services to your specific vision and needs.</p>
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
            <h2>Our Halloween Services</h2>
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

export default Halloween;
