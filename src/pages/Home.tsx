
import React from 'react';
import Hero from '../components/Hero';
import Slideshow from '../components/Slideshow';
import './Home.css';

const Home: React.FC = () => {
  const featuredImages = [
    'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format'
  ];

  return (
    <div className="home">
      <Hero />
      
      <section className="section">
        <div className="container">
          <div className="home-content">
            <div className="content-text">
              <h2>Making Every Occasion Special</h2>
              <p>
                Whether you're planning a wedding, celebrating a birthday, or marking 
                any special milestone, we provide inspiration and resources to make your 
                occasion truly memorable.
              </p>
              <p>
                Our curated collection of ideas, tips, and resources helps you create 
                beautiful moments that will be cherished forever.
              </p>
              <button className="btn btn-primary">View All Occasions</button>
            </div>
            
            <div className="content-slideshow">
              <Slideshow 
                images={featuredImages}
                autoPlay={true}
                autoPlayInterval={3000}
                showControls={true}
                showIndicators={true}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="features">
            <h2>Why Choose Us</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎉</div>
                <h3>Expert Planning</h3>
                <p>Professional guidance for every type of celebration</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💝</div>
                <h3>Personal Touch</h3>
                <p>Customized solutions for your unique vision</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⭐</div>
                <h3>Memorable Moments</h3>
                <p>Creating experiences that last a lifetime</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
