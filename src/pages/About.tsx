
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about">
      <section className="section bg-gradient-to-r from-teal-400 to-blue-500 text-white">
        <div className="container text-center">
          <h1>About WishinBloom</h1>
          <p className="lead font-bold">
            We believe every moment deserves to be celebrated with love, 
            care, and attention to detail.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2>Our Story</h2>
              <p className="text-justify mb-4">
                Since as far back as I can remember, I've been creating handmade gifts, party favors, 
                invitations, and decorations for life's special moments. What began as a passion soon 
                became something more especially when my tiny helper, my daughter, joined me. With her 
                innocent creativity and curious heart, she helped bring our shared vision to life.
              </p>
              <p className="text-justify mb-4">
                Together, we poured love into every piece, making each item not just beautiful, but 
                meaningful. This work did more than fill our days, it strengthened the bond between us. 
                Through the art of creation, we built not just a small business, but a life filled with 
                joy, laughter, and connection.
              </p>
              <p className="text-justify">
                Nature has always been a gentle guide in our creative journey. The colors, textures, 
                and harmony of the natural world inspire everything we make. We are friendly users of 
                what nature offers always with respect, care, and a heart for sustainability.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&auto=format" 
                alt="Our team planning events" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3>Event Planning</h3>
              <p>
                Comprehensive planning services from concept to execution, 
                ensuring every detail is perfect.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3>Coordination</h3>
              <p>
                Day-of coordination to ensure your event runs smoothly, 
                allowing you to enjoy every moment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3>Consulting</h3>
              <p>
                Expert advice and guidance to help you make the best 
                decisions for your special occasion.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3>Vendor Network</h3>
              <p>
                Access to our trusted network of vendors and suppliers 
                for all your event needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">💎</div>
              <h4>Excellence</h4>
              <p>We strive for perfection in every detail</p>
            </div>
            
            <div>
              <div className="text-4xl mb-4">🤝</div>
              <h4>Trust</h4>
              <p>Building lasting relationships with our clients</p>
            </div>
            
            <div>
              <div className="text-4xl mb-4">🎨</div>
              <h4>Creativity</h4>
              <p>Bringing innovative ideas to every celebration</p>
            </div>
            
            <div>
              <div className="text-4xl mb-4">❤️</div>
              <h4>Passion</h4>
              <p>Love for what we do shows in every event</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
