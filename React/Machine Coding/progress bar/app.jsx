import React from 'react';
import ProgressBar from './progressbar';
import './style.css';

export default function App() {
  return (
    <div className="app">
      <h2>Progress Bar</h2>
      <ProgressBar value={25} />
    </div>
  );
}
