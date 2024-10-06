import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

import globalEN from "./translation/en/global.json"
import globalRO from "./translation/ro/global.json"
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';


// get user prefered language
const getLanguage = () => {
  const userLang = navigator.language || navigator.userLanguage
   if(userLang.startsWith("ro")){
    return "ro"
   }else{
    return "en"
   }

}


i18next.init({
  returnObjects: true, 
  interpolation: {escapeValue: false},
  lng: getLanguage(),
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

