
import React from 'react';
import './OccasionPage.css';

const Easter: React.FC = () => {
  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Easter Celebrations</h1>
            <p className="lead">Celebrate renewal and new beginnings with Easter gatherings that bring family and friends together.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="occasion-content">
            <div className="occasion-gallery">
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop&auto=format" alt="Easter Theme 1" />
                  <div className="gallery-item-content">
                    <h4>Traditional Easter Brunch</h4>
                    <p>Classic Easter celebrations with family brunch and egg hunts</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format" alt="Easter Theme 2" />
                  <div className="gallery-item-content">
                    <h4>Easter Garden Party</h4>
                    <p>Outdoor Easter celebrations in beautiful spring garden settings</p>
                    <button className="btn btn-primary">Inquire</button>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop&auto=format" alt="Easter Theme 3" />
                  <div className="gallery-item-content">
                    <h4>Modern Easter Celebration</h4>
                    <p>Contemporary Easter events with stylish decorations and activities</p>
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

export default Easter;
