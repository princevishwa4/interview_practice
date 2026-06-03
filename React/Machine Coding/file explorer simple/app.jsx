import React, { useState } from 'react';
import explorer from './formData.js';
import Explorer from './explorer';
import './style.css';

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const [selected, setSelected] = useState([]);

  return (
    <Explorer
      explorerData={explorerData}
      selected={selected}
      setSelected={setSelected}
    />
  );
}
