import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from '../data/translations.js';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'arita-language';
const DEFAULT_LANGUAGE = 'en';

function getNested(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (nextLanguage) => {
    if (translations[nextLanguage]) setLanguageState(nextLanguage);
  };

  const t = (path, fallback = '') => {
    const translated = getNested(translations[language], path);
    if (translated !== undefined) return translated;
    const english = getNested(translations.en, path);
    return english !== undefined ? english : fallback || path;
  };

  const value = useMemo(() => ({ language, setLanguage, t }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
