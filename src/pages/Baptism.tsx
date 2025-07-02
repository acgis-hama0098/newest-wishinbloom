
import React from 'react';
import './OccasionPage.css';

const Baptism: React.FC = () => {
  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Baptism Celebrations</h1>
            <p className="lead">Mark this sacred milestone with meaningful celebrations that honor faith and family.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="occasion-content">
            <div className="occasion-gallery">
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop&auto=format" alt="Baptism Theme 1" />
                  <div className="gallery-item-content">
                    <h4>Traditional Baptism</h4>
                    <p>Classic baptism celebrations with elegant decorations and meaningful touches</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format" alt="Baptism Theme 2" />
                  <div className="gallery-item-content">
                    <h4>Family Baptism Gathering</h4>
                    <p>Intimate family celebrations following the baptism ceremony</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop&auto=format" alt="Baptism Theme 3" />
                  <div className="gallery-item-content">
                    <h4>Modern Baptism Reception</h4>
                    <p>Contemporary baptism receptions with stylish decorations and catering</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="occasion-details">
              <h2>Why Choose Us for Your Baptism?</h2>
              <div className="detail-list">
                <div className="detail-item">
                  <div className="detail-icon">✨</div>
                  <div>
                    <h4>Personalized Planning</h4>
                    <p>Every baptism is unique, and we tailor our services to your specific vision and needs.</p>
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
            <h2>Our Baptism Services</h2>
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

export default Baptism;
