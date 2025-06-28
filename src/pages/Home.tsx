
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">
            Celebrate Every Special Moment
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we help you create 
            unforgettable memories for life's most precious occasions.
          </p>
          <div className="space-x-4">
            <button className="btn btn-primary bg-white text-blue-600 hover:bg-gray-100">
              Explore Services
            </button>
            <button className="btn btn-secondary border-white text-white hover:bg-white hover:text-blue-600">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Making Every Occasion Special</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're planning a wedding, celebrating a birthday, or marking 
              any special milestone, we provide inspiration and resources to make your 
              occasion truly memorable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎉</div>
              <h3>Expert Planning</h3>
              <p className="text-gray-600">Professional guidance for every type of celebration</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💝</div>
              <h3>Personal Touch</h3>
              <p className="text-gray-600">Customized solutions for your unique vision</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⭐</div>
              <h3>Memorable Moments</h3>
              <p className="text-gray-600">Creating experiences that last a lifetime</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-alt">
        <div className="container text-center">
          <h2>Ready to Plan Your Perfect Event?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's bring your vision to life with our expert planning services.
          </p>
          <button className="btn btn-primary">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
