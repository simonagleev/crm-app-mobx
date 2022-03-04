import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';

const wrappedApp = (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

ReactDOM.render(wrappedApp, document.getElementById('root'));
