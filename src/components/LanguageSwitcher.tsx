import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setIsOpen(false);
    
    // Update URL to include language prefix
    const currentPath = location.pathname;
    let newPath = currentPath;
    
    // Remove existing language prefix if present
    if (currentPath.startsWith('/fr/')) {
      newPath = currentPath.substring(3);
    } else if (currentPath.startsWith('/fr')) {
      newPath = currentPath.substring(3) || '/';
    }
    
    // Add new language prefix for French
    if (lng === 'fr') {
      newPath = `/fr${newPath === '/' ? '' : newPath}`;
    }
    
    navigate(newPath);
  };

  const currentLanguage = i18n.language === 'fr' ? 'Français' : 'English';
  const currentFlag = i18n.language === 'fr' ? '🇫🇷' : '🇺🇸';

  return (
    <div className="language-switcher relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 150)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-card border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200 shadow-sm hover:shadow-md"
        aria-label="Change language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={16} className="text-muted-foreground" />
        <span className="text-sm font-medium">{currentFlag} {i18n.language.toUpperCase()}</span>
        <ChevronDown size={14} className={`text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 py-2 bg-card border border-border rounded-lg shadow-lg z-50 min-w-[140px] animate-fade-in">
          <button
            onClick={() => changeLanguage('en')}
            className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors ${
              i18n.language === 'en' ? 'bg-accent text-accent-foreground' : 'text-foreground'
            }`}
            role="menuitem"
          >
            <span>🇺🇸</span>
            <span>English</span>
          </button>
          <button
            onClick={() => changeLanguage('fr')}
            className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors ${
              i18n.language === 'fr' ? 'bg-accent text-accent-foreground' : 'text-foreground'
            }`}
            role="menuitem"
          >
            <span>🇫🇷</span>
            <span>Français</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;