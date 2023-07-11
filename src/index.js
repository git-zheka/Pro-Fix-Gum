import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import StyleCSS from './style.module.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className={StyleCSS.Redner}>
      <App />
    </div>
      
    </BrowserRouter>
  </React.StrictMode>
);

