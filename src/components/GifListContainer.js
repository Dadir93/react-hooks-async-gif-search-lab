import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setGifs([]);
      return;
    }

    const apiKey = 'qggwvHwiZTh0yZs1GQVgcjoYh9tf5dF6'; // Replace with your Giphy API key
    const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=3`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setGifs(data.data);
      })
      .catch(error => console.error('Error fetching GIFs:', error));
  }, [searchTerm]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <GifSearch onSearch={handleSearch} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
