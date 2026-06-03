import React, { useEffect, useRef, useState } from 'react';
import './style';

const ProgressBar = ({ value }) => {
  const [percent, setPercent] = useState(value);
  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setPercent((prev) => {
        if (prev === 100) {
          clearInterval(timerId.current);
          timerId.current = null;
          return prev;
        }
        return prev + 1;
      });
    }, [100]);

    return () => clearInterval(timerId.current);
  }, []);

  return (
    <div className="bar">
      <span>{percent}%</span>
      <div className="fill_color" style={{ width: `${percent}%` }} />
    </div>
  );
};

export default ProgressBar;
