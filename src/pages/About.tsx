import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import './About.css';
const About: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <SEO 
        title={t('about.title')}
        description="Learn about our story, passion for event planning, and commitment to creating memorable celebrations. From handmade gifts to full event coordination, we bring love to every detail."
        keywords="about us, event planning story, handmade celebrations, sustainable events, community support, family business"
      />
      <div className="about">
      <section className="section bg-[#a7e3d8]">
        <div className="container bg-[#a7e3d8]/[0.84]">
          <div className="about-hero">
            <h1>{t('about.title')}</h1>
            <p className="lead font-bold">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>{t('about.ourStory')}</h2>
              <p className="text-justify">Since as far back as I can remember, I’ve been creating handmade gifts, party favors, invitations, and decorations for life’s special moments. What began as a passion soon became something more especially when my tiny helper, my daughter, joined me. With her innocent creativity and curious heart, she helped bring our shared vision to life. Together, we poured love into every piece, making each item not just beautiful, but meaningful. This work did more than fill our days, it strengthened the bond between us. Through the art of creation, we built not just a small business, but a life filled with joy, laughter, and connection. As a single mother, raising my only daughter came with challenges. But what kept us grounded and grateful was the happiness we were able to share with others. Our clients welcomed us into their most cherished moments; weddings, baptisms, birthdays, and more. Some even invited us to their celebrations, turning strangers into friends and work into lasting memories. These experiences carried us through the hardest of times and became the foundation of our story.</p>
              <p className="text-justify">Nature has always been a gentle guide in our creative journey. The colors, textures, and harmony of the natural world inspire everything we make. We are friendly users of what nature offers always with respect, care, and a heart for sustainability.

Beyond our love for design, we believe in giving back. Our small business proudly contributes to the community by supporting people with disabilities, offering them opportunities to work with us in ways that honor their abilities and dignity.

Every item we make carries a story : ours, and now, yours. Thank you for letting us be a part of your beautiful moments.</p>
            </div>
            
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&auto=format" alt="Mother and daughter working together on handmade event decorations and planning materials" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{t('about.whatWeDo')}</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>{t('about.services.eventPlanning.title')}</h3>
              <p>{t('about.services.eventPlanning.description')}</p>
            </div>
            
            <div className="service-card">
              <h3>{t('about.services.coordination.title')}</h3>
              <p>{t('about.services.coordination.description')}</p>
            </div>
            
            <div className="service-card">
              <h3>{t('about.services.consulting.title')}</h3>
              <p>{t('about.services.consulting.description')}</p>
            </div>
            
            <div className="service-card">
              <h3>{t('about.services.vendorNetwork.title')}</h3>
              <p>{t('about.services.vendorNetwork.description')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="values">
            <h2>{t('about.ourValues')}</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">💎</div>
                <h4>{t('about.values.excellence.title')}</h4>
                <p>{t('about.values.excellence.description')}</p>
              </div>
              
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h4>{t('about.values.trust.title')}</h4>
                <p>{t('about.values.trust.description')}</p>
              </div>
              
              <div className="value-item">
                <div className="value-icon">🎨</div>
                <h4>{t('about.values.creativity.title')}</h4>
                <p>{t('about.values.creativity.description')}</p>
              </div>
              
              <div className="value-item">
                <div className="value-icon">❤️</div>
                <h4>{t('about.values.passion.title')}</h4>
                <p>{t('about.values.passion.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};
export default About;