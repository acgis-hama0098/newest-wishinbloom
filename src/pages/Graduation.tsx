import React from 'react';
import './OccasionPage.css';

const Graduation: React.FC = () => {
  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Graduation Celebrations</h1>
            <p className="lead">Honor academic achievements with memorable graduation celebrations that mark this important milestone.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="occasion-content">
            <div className="occasion-gallery">
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="High School Graduation" />
                  <div className="gallery-item-content">
                    <h4>High School Graduation</h4>
                    <p>Celebrate the transition to adulthood with parties honoring years of hard work</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="College Graduation" />
                  <div className="gallery-item-content">
                    <h4>College Graduation</h4>
                    <p>Honor degree achievements with sophisticated celebrations for graduates</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Graduate Degree" />
                  <div className="gallery-item-content">
                    <h4>Graduate Degree</h4>
                    <p>Celebrate advanced degrees with elegant parties recognizing exceptional dedication</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="occasion-details">
              <h2>Why Choose Us for Graduations?</h2>
              <div className="detail-list">
                <div className="detail-item">
                  <div className="detail-icon">🎓</div>
                  <div>
                    <h4>Achievement-Focused Planning</h4>
                    <p>Every graduation celebration honors the graduate's hard work and accomplishments.</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">🎯</div>
                  <div>
                    <h4>Attention to Detail</h4>
                    <p>From school colors to memory displays, we capture the graduate's journey.</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">🤝</div>
                  <div>
                    <h4>Full Support</h4>
                    <p>Our team ensures your graduation celebration is memorable and stress-free.</p>
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
            <h2>Our Graduation Services</h2>
            <div className="services-grid">
              <div className="service-item">
                <h4>Event Design</h4>
                <p>Custom themes celebrating academic achievements and future goals</p>
              </div>
              <div className="service-item">
                <h4>Venue Selection</h4>
                <p>Finding the perfect location to celebrate this milestone</p>
              </div>
              <div className="service-item">
                <h4>Vendor Coordination</h4>
                <p>Managing all suppliers and service providers for your celebration</p>
              </div>
              <div className="service-item">
                <h4>Day-of Coordination</h4>
                <p>Ensuring everything runs smoothly on graduation day</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Graduation;