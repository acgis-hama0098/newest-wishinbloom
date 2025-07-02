
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Birthday from './pages/Birthday';
import Wedding from './pages/Wedding';
import Baptism from './pages/Baptism';
import MothersDay from './pages/MothersDay';
import Christmas from './pages/Christmas';
import Easter from './pages/Easter';
import Halloween from './pages/Halloween';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ReturnPolicy from './pages/ReturnPolicy';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/occasion/birthday" element={<Birthday />} />
            <Route path="/occasion/wedding" element={<Wedding />} />
            <Route path="/occasion/baptism" element={<Baptism />} />
            <Route path="/occasion/mothers-day" element={<MothersDay />} />
            <Route path="/occasion/christmas" element={<Christmas />} />
            <Route path="/occasion/easter" element={<Easter />} />
            <Route path="/occasion/halloween" element={<Halloween />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
