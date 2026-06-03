import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';
import { ThemeProvider } from './themeProvider';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
