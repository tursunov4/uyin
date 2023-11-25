import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/main.css"
import { ContextProvider } from './Context/Context';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextProvider>
    <App />
    </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


