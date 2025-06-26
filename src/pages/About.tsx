
import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <section className="section">
        <div className="container">
          <div className="about-hero">
            <h1>About Occasions</h1>
            <p className="lead">
              We believe every moment deserves to be celebrated with love, 
              care, and attention to detail.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded with a passion for creating memorable experiences, Occasions 
                has been helping families and individuals celebrate life's most 
                important moments for over a decade.
              </p>
              <p>
                From intimate family gatherings to grand celebrations, we understand 
                that each occasion is unique and deserves personalized attention. 
                Our team of experienced planners and coordinators work tirelessly 
                to bring your vision to life.
              </p>
            </div>
            
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&auto=format" 
                alt="Our team planning events"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What We Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Event Planning</h3>
              <p>
                Comprehensive planning services from concept to execution, 
                ensuring every detail is perfect.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Coordination</h3>
              <p>
                Day-of coordination to ensure your event runs smoothly, 
                allowing you to enjoy every moment.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Consulting</h3>
              <p>
                Expert advice and guidance to help you make the best 
                decisions for your special occasion.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Vendor Network</h3>
              <p>
                Access to our trusted network of vendors and suppliers 
                for all your event needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">💎</div>
                <h4>Excellence</h4>
                <p>We strive for perfection in every detail</p>
              </div>
              
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h4>Trust</h4>
                <p>Building lasting relationships with our clients</p>
              </div>
              
              <div className="value-item">
                <div className="value-icon">🎨</div>
                <h4>Creativity</h4>
                <p>Bringing innovative ideas to every celebration</p>
              </div>
              
              <div className="value-item">
                <div className="value-icon">❤️</div>
                <h4>Passion</h4>
                <p>Love for what we do shows in every event</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
