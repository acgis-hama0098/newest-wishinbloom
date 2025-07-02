import React from 'react';
import { Link } from 'react-router-dom';
import './OccasionPage.css';

const ValentinesDay: React.FC = () => {
  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Valentine's Day Celebrations</h1>
            <p className="lead">Create romantic and memorable Valentine's Day experiences with our personalized celebration planning.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="occasion-content">
            <div className="occasion-gallery">
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Romantic Dinner" />
                  <div className="gallery-item-content">
                    <h4>Romantic Dinner</h4>
                    <p>Intimate dinner celebrations with elegant decorations and romantic ambiance</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Valentine's Party" />
                  <div className="gallery-item-content">
                    <h4>Valentine's Party</h4>
                    <p>Fun Valentine's Day parties with love-themed decorations and activities</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Couples Celebration" />
                  <div className="gallery-item-content">
                    <h4>Couples Celebration</h4>
                    <p>Special celebrations designed for couples to create lasting romantic memories</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
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
            <h2>Our Valentine's Day Services</h2>
            <div className="services-grid">
              <div className="service-item">
                <h4>Romantic Design</h4>
                <p>Custom romantic themes and decorations that express your love</p>
              </div>
              <div className="service-item">
                <h4>Venue Selection</h4>
                <p>Finding the perfect romantic location for your celebration</p>
              </div>
              <div className="service-item">
                <h4>Vendor Coordination</h4>
                <p>Managing all romantic suppliers and service providers</p>
              </div>
              <div className="service-item">
                <h4>Day-of Coordination</h4>
                <p>Ensuring everything runs smoothly on your romantic day</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ValentinesDay;