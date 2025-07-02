import React from 'react';
import './OccasionPage.css';

const CasualGift: React.FC = () => {
  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Casual Gift Celebrations</h1>
            <p className="lead">Celebrate everyday moments and spontaneous gestures with thoughtfully planned casual gift occasions.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="occasion-content">
            <div className="occasion-gallery">
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Just Because Party" />
                  <div className="gallery-item-content">
                    <h4>Just Because Party</h4>
                    <p>Spontaneous celebrations to show appreciation and create unexpected joy</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Friendship Celebration" />
                  <div className="gallery-item-content">
                    <h4>Friendship Celebration</h4>
                    <p>Casual gatherings to celebrate special friendships and meaningful connections</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Surprise Gesture" />
                  <div className="gallery-item-content">
                    <h4>Surprise Gesture</h4>
                    <p>Thoughtful surprise celebrations for life's everyday victories and moments</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="occasion-details">
              <h2>Why Choose Us for Casual Gifts?</h2>
              <div className="detail-list">
                <div className="detail-item">
                  <div className="detail-icon">🎁</div>
                  <div>
                    <h4>Thoughtful Planning</h4>
                    <p>Every casual celebration is designed to create meaningful moments of joy.</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">💫</div>
                  <div>
                    <h4>Attention to Detail</h4>
                    <p>From surprise elements to personal touches, we make every gesture special.</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">🤗</div>
                  <div>
                    <h4>Full Support</h4>
                    <p>Our team helps you create spontaneous celebrations that feel perfectly planned.</p>
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
            <h2>Our Casual Gift Services</h2>
            <div className="services-grid">
              <div className="service-item">
                <h4>Event Design</h4>
                <p>Simple yet meaningful themes for spontaneous celebrations</p>
              </div>
              <div className="service-item">
                <h4>Venue Selection</h4>
                <p>Finding casual and comfortable locations for your gathering</p>
              </div>
              <div className="service-item">
                <h4>Vendor Coordination</h4>
                <p>Managing suppliers for intimate and casual celebrations</p>
              </div>
              <div className="service-item">
                <h4>Day-of Coordination</h4>
                <p>Ensuring your casual celebration feels effortless and joyful</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CasualGift;