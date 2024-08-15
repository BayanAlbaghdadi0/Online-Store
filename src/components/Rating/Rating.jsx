import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Rating = ({ stars }) => {
  const ratingArray = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="flex items-center">
      {ratingArray.map((star, index) => (
        <span key={index} className="text-yellow-400">
          {index < stars ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      ))}
      <span className="ml-2 text-sm">{stars} / 5</span>
    </div>
  );
};

export default Rating;