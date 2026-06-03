import React from 'react';
import './style.css';

export default function App() {
  const [timer, setTimer] = React.useState(0);
  const [statusChecker, setStatusChecker] = React.useState({
    start: false,
    reverse: false,
  });
  const timerRef = React.useRef(null);

  function handleStartTimer() {
    setStatusChecker((prev) => {
      return {
        ...prev,
        start: true,
      };
    });

    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  }

  function handleStopTimer() {
    setStatusChecker({
        start: false,
        reverse: false,
    });
    clearInterval(timerRef.current);
  }

  function handleReverseTimer() {
    setStatusChecker((prev) => {
      return {
        ...prev,
        reverse: true,
      };
    });

    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          clearInterval(timerRef.current);
          setStatusChecker({
            start: false,
            reverse: false,
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  function handleResetTimer() {
    setStatusChecker((prev) => {
      return {
        ...prev,
        start: false,
        reverse: false,
      };
    });

    clearInterval(timerRef.current);
    setTimer(0);
  }

  return (
    <div>
      <p>Time :- {timer}</p>
      <div className="button__container">
        <button onClick={handleStartTimer} disabled={statusChecker.reverse}>
          Start
        </button>
        <button onClick={handleStopTimer}>Stop</button>
        <button onClick={handleReverseTimer} disabled={statusChecker.start}>
          Reverse
        </button>
        <button
          onClick={handleResetTimer}
          disabled={statusChecker.start || statusChecker.reverse}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
