import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// ✅ UPDATED paths
import './globals.css';
import './themes.css';

import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
