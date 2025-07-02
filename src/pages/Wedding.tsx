import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './OccasionPage.css';
const Wedding: React.FC = () => {
  return (
    <>
      <SEO 
        title="Wedding Planning Services"
        description="Expert wedding planning services to create your dream wedding. From intimate ceremonies to grand celebrations, we handle every detail of your special day."
        keywords="wedding planner, wedding planning services, bridal planning, wedding coordination, wedding ceremony, wedding reception"
      />
      <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Wedding Celebrations</h1>
            <p className="lead">Your perfect wedding day deserves perfect planning. From intimate ceremonies to grand celebrations, we help create the wedding of your dreams.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="occasion-content">
            <div className="occasion-gallery">
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Elegant classic wedding ceremony with traditional floral arrangements and romantic church setting" />
                  <div className="gallery-item-content">
                    <h4>Classic Wedding</h4>
                    <p>Timeless and elegant wedding ceremonies with traditional touches</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Beautiful outdoor wedding ceremony with garden backdrop and natural floral decorations" />
                  <div className="gallery-item-content">
                    <h4>Outdoor Wedding</h4>
                    <p>Beautiful outdoor ceremonies in natural settings and gardens</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Contemporary modern wedding ceremony with sleek decor and minimalist style elements" />
                  <div className="gallery-item-content">
                    <h4>Modern Wedding</h4>
                    <p>Contemporary wedding celebrations with modern style and flair</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="occasion-details">
              <h2>Why Choose Us for Your Wedding?</h2>
              <div className="detail-list">
                <div className="detail-item">
                  <div className="detail-icon">✨</div>
                  <div>
                    <h4>Personalized Planning</h4>
                    <p>Every wedding is unique, and we tailor our services to your specific vision and needs.</p>
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
            <h2>Our Wedding Services</h2>
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
    </>
  );
};
export default Wedding;