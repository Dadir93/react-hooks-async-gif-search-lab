import React from 'react';

function Gif({ gifData }) {
  const { title, images } = gifData;
  const gifUrl = images.original.url;

  return (
    <div>
      <h3>{title}</h3>
      <img src={gifUrl} alt={title} />
    </div>
  );
}

export default Gif;
