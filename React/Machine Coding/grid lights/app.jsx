import React from 'react';
import './style.css';

export default function App() {
  const [seriesTracker, setSeriesTracker] = React.useState([]);
  const timeInterval = React.useRef(null);
  const ROWS = 3;
  const COLS = 3;

  function backtrackProcess() {
    timeInterval.current = setInterval(() => {
      setSeriesTracker(prev => {
        if (prev.length === 0) {
          clearInterval(timeInterval.current);
          return prev;
        }
        return prev.slice(0, -1);
      })
    }, 300);
  }

  function handleClick(index) {
    if (!seriesTracker.includes(index)) {
      setSeriesTracker(prev => [...prev, index]);
    }
  }

  React.useEffect(() => {
    if (seriesTracker.length === ((ROWS * COLS) - 1)) {
      backtrackProcess()
    }
  }, [seriesTracker]);

  return (
    <div style={{ margin: '20px' }}>
      <ul
        style={{ 
          width: '500px', 
          height: '500px',
          padding: '40px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '25px',
          justifyContent: 'space-between',
          border: '1px solid black',
        }}
      >
        {
          [...Array(ROWS * COLS)].map((_, index) => {
            const isMiddle = index === Math.floor((ROWS * COLS) / 2);

            return (
              <li
                onClick={() => !isMiddle && handleClick(index)}
                style={{ 
                  width: `calc(500px / ${COLS} -  25px)`, 
                  height: `calc(500px / ${ROWS} - 25px)`, 
                  border: '1px solid black',
                  backgroundColor: seriesTracker.includes(index) ? 'green' : 'transparent',
                  cursor: 'pointer',
                  visibility: isMiddle ? 'hidden' : 'visible',
                }}>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}



// ----------------------------------------------- Optimization

import React from 'react';
import './style.css';

const ROWS = 3;
const COLS = 3;
const finalMatrix = new Array(ROWS * COLS).fill(undefined);

export default function App() {
  const [seriesTracker, setSeriesTracker] = React.useState([]);
  const timeInterval = React.useRef(null);

  function backtrackProcess() {
    if (timeInterval.current) return;

    timeInterval.current = setInterval(() => {
      setSeriesTracker((prev) => {
        if (prev.length === 0) {
          clearInterval(timeInterval.current);
          timeInterval.current = null;
          return prev;
        }
        return prev.slice(0, -1);
      });
    }, 300);
  }

  function handleClick(index) {
    setSeriesTracker((prev) => {
      if (prev.includes(index)) return prev;
      return [...prev, index];
    });
  }

  React.useEffect(() => {
    if (seriesTracker.length === finalMatrix.length - 1) {
      backtrackProcess();
    }
  }, [seriesTracker]);

  React.useEffect(() => {
    return () => clearInterval(timeInterval.current);
  }, []);

  const hashSet = React.useMemo(() => new Set(seriesTracker), [seriesTracker]);

  return (
    <div style={{ margin: '20px' }}>
      <ul
        style={{
          width: '500px',
          height: '500px',
          padding: '40px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '25px',
          justifyContent: 'space-between',
          border: '1px solid black',
        }}
      >
        {finalMatrix.map((_, index) => {
          const isMiddle = index === Math.floor((ROWS * COLS) / 2);

          return (
            <li
              key={index}
              onClick={() => !isMiddle && handleClick(index)}
              style={{
                width: `calc(500px / ${COLS} -  25px)`,
                height: `calc(500px / ${ROWS} - 25px)`,
                border: '1px solid black',
                backgroundColor: hashSet.has(index) ? 'green' : 'transparent',
                cursor: 'pointer',
                visibility: isMiddle ? 'hidden' : 'visible',
              }}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}
