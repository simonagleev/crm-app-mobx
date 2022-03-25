import AlertProvider from './components/AlertProvider';
import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

const wrappedApp = (
  <ThemeProvider theme={theme}>
    <AlertProvider>
      <App />
    </AlertProvider>  
  </ThemeProvider>
);

ReactDOM.render(wrappedApp, document.getElementById('root'));
