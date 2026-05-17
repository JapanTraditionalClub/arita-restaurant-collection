import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { SelectionProvider } from './context/SelectionContext.jsx';
import { FilterProvider } from './context/FilterContext.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <LanguageProvider>
        <SelectionProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </SelectionProvider>
      </LanguageProvider>
    </HashRouter>
  </React.StrictMode>
);
