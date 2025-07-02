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

  const currentFlag = i18n.language === 'fr' ? '🇫🇷' : '🇬🇧';

  return (
    <div className="language-switcher relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 150)}
        className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ease-in-out
                   bg-[hsl(var(--language-bg))] text-[hsl(var(--language-text))] 
                   border border-[hsl(var(--language-border))]
                   hover:bg-[hsl(var(--language-bg-hover))] hover:shadow-lg hover:shadow-primary/20
                   focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2
                   font-medium text-sm"
        aria-label="Change language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={16} className="text-[hsl(var(--language-text))] opacity-70" />
        <span className="flex items-center gap-1.5">
          <span className="text-base">{currentFlag}</span>
          <span className="font-serif">{i18n.language.toUpperCase()}</span>
        </span>
        <ChevronDown 
          size={14} 
          className={`text-[hsl(var(--language-text))] opacity-70 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 py-1 
                        bg-[hsl(var(--language-bg))] border border-[hsl(var(--language-border))]
                        rounded-xl shadow-xl shadow-primary/10 z-50 min-w-[160px] 
                        animate-fade-in backdrop-blur-sm">
          <button
            onClick={() => changeLanguage('en')}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium
                       transition-all duration-200 ease-in-out
                       hover:bg-[hsl(var(--language-bg-hover))] hover:shadow-sm
                       ${i18n.language === 'en' 
                         ? 'bg-[hsl(var(--language-bg-hover))] text-[hsl(var(--language-text))]' 
                         : 'text-[hsl(var(--language-text))]'
                       }
                       first:rounded-t-xl last:rounded-b-xl`}
            role="menuitem"
          >
            <span className="text-lg">🇬🇧</span>
            <span className="font-serif">English</span>
          </button>
          <button
            onClick={() => changeLanguage('fr')}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium
                       transition-all duration-200 ease-in-out
                       hover:bg-[hsl(var(--language-bg-hover))] hover:shadow-sm
                       ${i18n.language === 'fr' 
                         ? 'bg-[hsl(var(--language-bg-hover))] text-[hsl(var(--language-text))]' 
                         : 'text-[hsl(var(--language-text))]'
                       }
                       first:rounded-t-xl last:rounded-b-xl`}
            role="menuitem"
          >
            <span className="text-lg">🇫🇷</span>
            <span className="font-serif">Français</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;