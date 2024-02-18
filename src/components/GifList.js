import React from 'react';
import Gif from './Gif';

function GifList({ gifs }) {
  return (
    <div>
      {gifs.map(gif => (
        <Gif key={gif.id} gifData={gif} />
      ))}
    </div>
  );
}

export default GifList;
