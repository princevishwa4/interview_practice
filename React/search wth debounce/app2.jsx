import React from 'react';
import useDebounce from './hooks/use-debounce';

export default function App() {
  const [searchedInput, setSearchedInput] = React.useState('');

  function handleChange(e) {
    console.log(e.target.value);
    setSearchedInput(e.target.value);
  }

  const enhancedHandleChange = useDebounce(handleChange, 300);

  return (
    <input
      type="search"
      placeholder="Search keywords"
      onChange={enhancedHandleChange}
    />
  );
}
