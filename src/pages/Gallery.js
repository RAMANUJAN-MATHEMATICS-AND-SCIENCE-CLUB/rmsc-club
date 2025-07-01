import React from 'react';
import './Gallery.css';

function Gallery() {
  return (
    <div className="gallery-page">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        <img src="/assets/images/img1.jpg" alt="Event 1" />
        <img src="/assets/images/img2.jpg" alt="Event 2" />
        <img src="/assets/images/img3.jpg" alt="Event 3" />
        <img src="/assets/images/img4.jpg" alt="Event 4" />
      </div>
    </div>
  );
}

export default Gallery;