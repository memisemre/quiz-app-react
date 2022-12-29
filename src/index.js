import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/app.css'
import './assets/css/reset.css'
import SocialMediaLinks from './components/socialMedia/smIndex';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SocialMediaLinks />
    <App />
  </React.StrictMode>
);
