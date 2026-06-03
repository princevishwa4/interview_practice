import React, { useEffect } from 'react';
import { useTheme } from './themeProvider';
import './style.css';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div>
      <button onClick={toggleTheme}>Toggle</button>
      <h2>This is the toggle theme example</h2>
    </div>
  );
}
