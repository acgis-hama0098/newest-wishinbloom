import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import './LearnMore.css';

const LearnMore: React.FC = () => {
  return (
    <>
      <SEO 
        title="Learn More"
        description="Discover our comprehensive event planning services, from weddings to special celebrations. Expert planning, personalized touch, and memorable moments."
        keywords="event planning services, wedding planning, venue selection, floral arrangements, themed decorations, personalized gifts"
      />
      <div className="learn-more">
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Learn More About Our Services</h1>
              <p>
                Discover how we transform your special occasions into unforgettable memories 
                with our comprehensive event planning services and personal touch.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="intro-section">
              <h2>Welcome to Occasions</h2>
              <p>
                At Occasions, we believe every celebration deserves to be extraordinary. 
                Our dedicated team specializes in creating personalized experiences that 
                reflect your unique vision and style, ensuring every detail is perfect 
                for your special day.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="services-section">
              <h2>What We Offer</h2>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">📋</div>
                  <h3>Event Planning</h3>
                  <p>Complete event coordination from conception to execution, ensuring every detail is perfectly managed.</p>
                </div>
                <div className="service-card">
                  <div className="service-icon">🏛️</div>
                  <h3>Venue Selection</h3>
                  <p>Expert guidance in finding the perfect venue that matches your vision and budget requirements.</p>
                </div>
                <div className="service-card">
                  <div className="service-icon">🌸</div>
                  <h3>Custom Floral Arrangements</h3>
                  <p>Beautiful, personalized floral designs that complement your event's theme and color palette.</p>
                </div>
                <div className="service-card">
                  <div className="service-icon">🎨</div>
                  <h3>Themed Decorations</h3>
                  <p>Creative decoration solutions that transform your venue into the perfect setting for your celebration.</p>
                </div>
                <div className="service-card">
                  <div className="service-icon">🎁</div>
                  <h3>Personalized Gifts</h3>
                  <p>Unique, customized gifts and favors that leave lasting impressions on your guests.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="testimonials-section">
              <h2>Client Testimonials</h2>
              <div className="testimonials-grid">
                <div className="testimonial-card">
                  <p>"The team at Occasions made our wedding absolutely perfect. Every detail was thoughtfully planned and executed flawlessly. We couldn't have asked for a better experience!"</p>
                  <cite>— Sarah & Michael Johnson</cite>
                </div>
                <div className="testimonial-card">
                  <p>"From the initial consultation to the final cleanup, their professionalism and creativity exceeded our expectations. Our anniversary celebration was truly magical."</p>
                  <cite>— Elizabeth Martinez</cite>
                </div>
                <div className="testimonial-card">
                  <p>"They transformed our vision into reality for our daughter's graduation party. The attention to detail and personal touch made it an unforgettable celebration."</p>
                  <cite>— David & Linda Chen</cite>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="gallery-preview-section">
              <h2>Gallery Preview</h2>
              <p>Take a look at some of our recent work and get inspired for your own celebration.</p>
              <div className="gallery-grid">
                <img src="/images/wedding/wedding1.jpg" alt="Beautiful wedding ceremony setup" />
                <img src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop&auto=format" alt="Elegant event lighting" />
                <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop&auto=format" alt="Beautiful floral arrangements" />
              </div>
              <Link to="/contact" className="btn btn-primary">View Full Gallery</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <div className="contact-grid">
                <div className="contact-item">
                  <h3>📧 Email</h3>
                  <p>hello@occasions-events.com</p>
                </div>
                <div className="contact-item">
                  <h3>📞 Phone</h3>
                  <p>(555) 123-4567</p>
                </div>
                <div className="contact-item">
                  <h3>📱 Social Media</h3>
                  <p>
                    <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a> | 
                    <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                    <a href="#" target="_blank" rel="noopener noreferrer">Pinterest</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="faq-section">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-grid">
                <div className="faq-item">
                  <h3>How far in advance should I book your services?</h3>
                  <p>We recommend booking 3-6 months in advance for larger events like weddings, and 4-8 weeks for smaller celebrations. However, we're always happy to discuss your timeline and see how we can help.</p>
                </div>
                <div className="faq-item">
                  <h3>Do you provide services for destination events?</h3>
                  <p>Yes! We love destination events and can coordinate celebrations anywhere. Travel expenses are included in the planning package, and we work closely with local vendors to ensure seamless execution.</p>
                </div>
                <div className="faq-item">
                  <h3>What's included in your event planning packages?</h3>
                  <p>Our packages include initial consultation, venue selection assistance, vendor coordination, timeline creation, day-of coordination, and post-event cleanup. We customize each package based on your specific needs and budget.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LearnMore;