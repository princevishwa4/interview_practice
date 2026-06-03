import React from 'react';
import './style.css';

export default function App() {
  const [allSelections, setAllSelections] = React.useState([]);
  const [leftItems, setLeftItems] = React.useState([
    'Left Item 1',
    'Left Item 2',
    'Left Item 3',
  ]);
  const [rightItems, setRightItems] = React.useState([
    'Right Item 1',
    'Right Item 2',
    'Right Item 3',
  ]);

  function updateAllSelections(item) {
    setAllSelections(prev => {
      if (prev.includes(item)) {
        return prev.filter(i => i !== item)
      }
      return [...prev, item];
    });
  }

  function handleMoveToRight() {
    setRightItems(prev => [
      ...prev,
      ...allSelections.filter(item => !prev.includes(item))
    ]);
    // for (let i = 0; i < allSelections.length; i++) {
    //   if (!rightItems.includes(allSelections[i])) {
    //     setRightItems(prev => [...prev, allSelections[i]]);
    //   }
    // }

    setLeftItems(prev => prev.filter(item => !allSelections.includes(item)));
    // const finalLeftItems = [];
    // for (let i = 0; i < leftItems.length; i++) {
    //   if (!allSelections.includes(leftItems[i])) {
    //     finalLeftItems.push(leftItems[i]);
    //   }
    // }    
    // setLeftItems(finalLeftItems);
    setAllSelections([]);
  }

  function handleMoveToLeft() {
    setLeftItems(prev => [
      ...prev,
      ...allSelections.filter(item => !prev.includes(item))
    ]);    
    // for (let i = 0; i < allSelections.length; i++) {
    //   if (!leftItems.includes(allSelections[i])) {
    //     setLeftItems(prev => [...prev, allSelections[i]]);
    //   }
    // } 
    
    setRightItems(prev => prev.filter(item => !allSelections.includes(item)));
    // const finalRightItems = [];
    // for (let i = 0; i < rightItems.length; i++) {
    //   if (!allSelections.includes(rightItems[i])) {
    //     finalRightItems.push(rightItems[i]);
    //   }
    // }    
    // setRightItems(finalRightItems);
    setAllSelections([]);    
  }

  const hasLeftSelection = allSelections.some(item => leftItems.includes(item));
  const hasRightSelection = allSelections.some(item => rightItems.includes(item));

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <ul>
        {leftItems.map(item => {
          return (
            <li key={item}>
              <input
                type="checkbox"
                id={item}
                name={item}
                value={item}
                onChange={() => updateAllSelections(item)}
                checked={allSelections.includes(item)}
              />
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={handleMoveToRight} disabled={!hasLeftSelection}>Move to Right</button>
        <br />
        <button onClick={handleMoveToLeft} disabled={!hasRightSelection}>Move to Left</button>
      </div>
      <ul>
        {rightItems.map(item => {
          return (
            <li key={item}>
              <input
                type="checkbox"
                id={item}
                name={item}
                value={item}
                onChange={() => updateAllSelections(item)}
                checked={allSelections.includes(item)}
              />
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
