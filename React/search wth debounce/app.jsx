import React from 'react';
import './style.css';

export default function App() {
  const [searchedInput, setSearchedInput] = React.useState('');

  function handleChange(e) {
    console.log(e.target.value);
    setSearchedInput(e.target.value);
  }

  function debounceHandleChange(cb, delay) {
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }

  const enhancedHandleChange = debounceHandleChange(handleChange, 300);

  return (
    <input
      type="search"
      placeholder="Search keywords"
      onChange={enhancedHandleChange}
    />
  );
}
