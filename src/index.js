import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import StyleCSS from './style.module.scss'
import store from './store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className={StyleCSS.Redner}>
    <Provider store={store}>
      <App />
    </Provider>
    </div>
      
    </BrowserRouter>
  </React.StrictMode>
);

