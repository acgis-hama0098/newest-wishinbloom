
import React from 'react';
import './OccasionPage.css';

const Halloween: React.FC = () => {
  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Halloween Celebrations</h1>
            <p className="lead">Create spook-tacular Halloween celebrations that are both thrilling and fun for all ages.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="occasion-content">
            <div className="occasion-gallery">
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop&auto=format" alt="Halloween Theme 1" />
                  <div className="gallery-item-content">
                    <h4>Spooky Halloween Party</h4>
                    <p>Thrilling Halloween parties with decorations and costume contests</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format" alt="Halloween Theme 2" />
                  <div className="gallery-item-content">
                    <h4>Family Halloween Fun</h4>
                    <p>Family-friendly Halloween celebrations with activities for all ages</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop&auto=format" alt="Halloween Theme 3" />
                  <div className="gallery-item-content">
                    <h4>Corporate Halloween Event</h4>
                    <p>Professional Halloween celebrations for workplace events</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Halloween;
