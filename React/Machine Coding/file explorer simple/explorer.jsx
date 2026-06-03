import React, { useState } from 'react';

const Explorer = ({ explorerData, selected, setSelected }) => {
  const [expand, setExpand] = useState(false);

  function handleSelect(id) {
    setExpand(!expand);
    setSelected((prev) => {
      if (prev.includes(id)) {
        return prev.filter((it) => it !== id);
      }
      return [...prev, id];
    });
  }
  const isSelected = selected.includes(explorerData.id);

  if (explorerData.isFolder) {
    return (
      <div>
        <span
          onClick={() => handleSelect(explorerData.id)}
          className={`folder ${isSelected ? 'selected' : ''}`}
        >
          {!expand ? '📁' : '📂'}
          {explorerData.name}
        </span>
        <div
          style={{ display: expand ? 'block' : 'none', paddingLeft: '25px' }}
        >
          {explorerData.items.map((item) => {
            return (
              <Explorer
                explorerData={item}
                selected={selected}
                setSelected={setSelected}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return <span className="file">📄{explorerData.name}</span>;
};

export default Explorer;
