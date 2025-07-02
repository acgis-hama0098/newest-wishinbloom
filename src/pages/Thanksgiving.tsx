import React from 'react';
import './OccasionPage.css';

const Thanksgiving: React.FC = () => {
  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Thanksgiving Celebrations</h1>
            <p className="lead">Gather with gratitude for meaningful Thanksgiving celebrations filled with warmth, family, and thankfulness.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="occasion-content">
            <div className="occasion-gallery">
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Family Thanksgiving" />
                  <div className="gallery-item-content">
                    <h4>Family Thanksgiving</h4>
                    <p>Traditional family gatherings with autumn decorations and gratitude-focused celebrations</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Friendsgiving Party" />
                  <div className="gallery-item-content">
                    <h4>Friendsgiving Party</h4>
                    <p>Modern celebrations with chosen family and friends sharing gratitude and good food</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Harvest Feast" />
                  <div className="gallery-item-content">
                    <h4>Harvest Feast</h4>
                    <p>Abundant celebrations featuring seasonal ingredients and autumn harvest themes</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="occasion-details">
              <h2>Why Choose Us for Thanksgiving?</h2>
              <div className="detail-list">
                <div className="detail-item">
                  <div className="detail-icon">🦃</div>
                  <div>
                    <h4>Grateful Planning</h4>
                    <p>Every Thanksgiving celebration focuses on gratitude, family, and meaningful connections.</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">🍂</div>
                  <div>
                    <h4>Attention to Detail</h4>
                    <p>From autumn leaves to harvest centerpieces, we create the perfect thankful atmosphere.</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">🤝</div>
                  <div>
                    <h4>Full Support</h4>
                    <p>Our team ensures your Thanksgiving celebration brings everyone together with gratitude.</p>
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
            <h2>Our Thanksgiving Services</h2>
            <div className="services-grid">
              <div className="service-item">
                <h4>Event Design</h4>
                <p>Warm autumn themes celebrating harvest and gratitude</p>
              </div>
              <div className="service-item">
                <h4>Venue Selection</h4>
                <p>Finding cozy locations perfect for Thanksgiving gatherings</p>
              </div>
              <div className="service-item">
                <h4>Vendor Coordination</h4>
                <p>Managing all suppliers and service providers for your feast</p>
              </div>
              <div className="service-item">
                <h4>Day-of Coordination</h4>
                <p>Ensuring everything runs smoothly for your grateful celebration</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Thanksgiving;