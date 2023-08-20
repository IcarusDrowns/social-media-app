import React, { useState } from 'react';
import axios from 'axios';

const AddMedia = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('movie');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMedia = { title, type, rating };

    axios.post('/media', newMedia)
      .then(() => {
        alert('Media added successfully!');
        setTitle('');
        setType('movie');
        setRating(0);
      })
      .catch((error) => {
        console.error('An error occurred while adding media:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="movie">Movie</option>
          <option value="tvSeries">TV Series</option>
          <option value="song">Song</option>
          <option value="book">Book</option>
        </select>
      </label>
      <label>
        Rating:
        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} min="0" max="5" required />
      </label>
      <button type="submit">Add Media</button>
    </form>
  );
};

export default AddMedia;
