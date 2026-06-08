import React, { useMemo, useState } from 'react';
import useCustomMemo from './hooks/use-custom-memo';
import './style.css';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  function squaredFunction() {
    console.log('Expensive Calculation');
    return counter * counter;
  }

  // const memoisedSquaredValue = useMemo(squaredFunction, [counter]);
  const memoisedSquaredValue = useCustomMemo(squaredFunction, [counter]);

  return (
    <div>
      <h3>Counter 1 : {counter}</h3>
      {/* <h3>Squared of Counter 1 : {squaredFunction()}</h3> */}
      <h3>Squared of Counter 1 : {memoisedSquaredValue}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h3>Counter 2 : {counter2}</h3>
      <button onClick={() => setCounter2(counter2 - 1)}>Decrement</button>
    </div>
  );
}
