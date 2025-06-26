
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OccasionDropdown.css';

interface OccasionDropdownProps {
  onSelect?: () => void;
}

const occasions = [
  'Baptism',
  'Wedding', 
  'Birthday',
  'Mother\'s Day',
  'Christmas',
  'Easter',
  'Halloween',
  'Valentine\'s Day',
  'Anniversary',
  'Graduation',
  'New Year',
  'Baby Shower'
];

const OccasionDropdown: React.FC<OccasionDropdownProps> = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOccasionSelect = (occasion: string) => {
    const formattedOccasion = occasion.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
    navigate(`/occasion/${formattedOccasion}`);
    setIsOpen(false);
    if (onSelect) {
      onSelect();
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="occasion-dropdown" ref={dropdownRef}>
      <button 
        className="dropdown-trigger"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Occasions
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <div className="dropdown-content">
          {occasions.map((occasion) => (
            <button
              key={occasion}
              className="dropdown-item"
              onClick={() => handleOccasionSelect(occasion)}
            >
              {occasion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OccasionDropdown;
