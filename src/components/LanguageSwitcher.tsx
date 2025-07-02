import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    
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

  return (
    <div className="language-switcher flex items-center gap-2">
      <Globe size={16} className="text-muted-foreground" />
      <div className="flex gap-1">
        <button
          onClick={() => changeLanguage('en')}
          className={`px-2 py-1 text-sm rounded transition-colors ${
            i18n.language === 'en' 
              ? 'bg-primary text-primary-foreground' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          EN
        </button>
        <span className="text-muted-foreground">|</span>
        <button
          onClick={() => changeLanguage('fr')}
          className={`px-2 py-1 text-sm rounded transition-colors ${
            i18n.language === 'fr' 
              ? 'bg-primary text-primary-foreground' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          FR
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;