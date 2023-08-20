import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MediaItem from './MediaItem';
import AddMedia from './AddMedia';
const MediaPage = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    // Fetch media items from the server
    axios.get('/api/media')
      .then((response) => {
        setMedia(response.data);
      })
      .catch((error) => {
        console.error('An error occurred while fetching media:', error);
      });
  }, []);

  return (
    <div>
      <h1>Media List</h1>
      <AddMedia />
      {media.map((item) => (
        <MediaItem key={item._id} title={item.title} type={item.type} rating={item.rating} />
      ))}
    </div>
  );
};

export default MediaPage;
