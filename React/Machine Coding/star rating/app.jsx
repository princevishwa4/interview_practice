import React from 'react';
import StarRating from './starRating';

export default function App() {
  const [rating, setRating] = React.useState(3);
  const totalStars = 5;

  return (
    <StarRating maxRating={totalStars} rating={rating} onChange={setRating} />
  );
}
