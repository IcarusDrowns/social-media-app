import React from 'react';
import MediaItem from './MediaItem';

const MediaSection = ({ type, mediaList }) => {
  return (
    <section>
      <h2>{type}</h2>
      {mediaList.map((item) => (
        <MediaItem key={item.id} title={item.title} rating={item.rating} />
      ))}
    </section>
  );
};

export default MediaSection;

