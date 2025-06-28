
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">WishinBloom</h3>
            <p className="text-gray-400">
              Creating unforgettable moments for life's special occasions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Weddings</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Birthdays</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Anniversaries</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Corporate Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="text-gray-400">
              <p>123 Celebration Street</p>
              <p>Event City, EC 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: hello@wishinbloom.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 WishinBloom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
