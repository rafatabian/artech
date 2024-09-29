import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

import globalEN from "./translation/en/global.json"
import globalRO from "./translation/ro/global.json"
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: {escapeValue: false},
  lng: "ro",
  resources: {
    en: {
      global: globalEN
    },
    ro: {
      global: globalRO
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
         <App />
      </I18nextProvider>
    </React.StrictMode>
  </HelmetProvider>
);

