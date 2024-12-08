import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './Routes.jsx';
import { ThemeProvider } from './components/theme-provider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>,
)
