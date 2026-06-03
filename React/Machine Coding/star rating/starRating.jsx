import React from 'react';
import './style.css';

const StarRating = ({ maxRating, rating, onChange }) => {
  const [hover, setHover] = React.useState(0);

  return (
    <div>
      <ul>
        {[...Array(maxRating)].map((_, index) => {
          const value = index + 1;

          return (
            <li
              key={value}
              onClick={() => onChange(value)}
              onMouseEnter={() => setHover(value)}
              onMouseLeave={() => setHover(0)}
              value={value}
              style={{ color: (hover || rating) >= value ? 'yellow' : 'grey' }}
            >
              ★
            </li>
          );
        })}
      </ul>
      <p>Rating is :- {rating}</p>
    </div>
  );
};

export default StarRating;
