import React from 'react';
import NavigationBar from '../components/NavigationBar';
import MediaSection from '../components/MediaSection';

const MediaPage = () => {
  const movies = [
    { id: 1, title: 'Inception', rating: 4.5 },
    { id: 2, title: 'The Dark Knight', rating: 5 },
    // Add more movies
  ];

  const tvSeries = [
    { id: 1, title: 'Breaking Bad', rating: 5 },
    { id: 2, title: 'Stranger Things', rating: 4 },
    // Add more TV series
  ];

  const songs = [
    { id: 1, title: 'Bohemian Rhapsody', rating: 5 },
    { id: 2, title: 'Stairway to Heaven', rating: 4.5 },
    // Add more songs
  ];

  const books = [
    { id: 1, title: '1984', rating: 4.5 },
    { id: 2, title: 'To Kill a Mockingbird', rating: 5 },
    // Add more books
  ];

  return (
    <div>
      <NavigationBar />
      <MediaSection type="Movies" mediaList={movies} />
      <MediaSection type="TV Series" mediaList={tvSeries} />
      <MediaSection type="Songs" mediaList={songs} />
      <MediaSection type="Books" mediaList={books} />
    </div>
  );
};

export default MediaPage;
