
// import React from 'react';
// import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
// import App from './App';
// import './index.css';
// import './App.css';

// // Create a root container for the app
// const root = createRoot(document.getElementById('app'));

// // Render the App component inside React.StrictMode
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}

