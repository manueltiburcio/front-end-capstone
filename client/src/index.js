import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
// import './light.css';
// import './dark.css';
import App from './components/App.jsx';

const selectedTheme = localStorage.getItem('theme');
selectedTheme === 'dark' ? document.body.style.backgroundColor = 'black' : document.body.style.backgroundColor = 'white';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
