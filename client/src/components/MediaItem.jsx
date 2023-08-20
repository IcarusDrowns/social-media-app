import React from 'react';

const MediaItem = ({ title, type, rating }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Type: {type}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default MediaItem;
