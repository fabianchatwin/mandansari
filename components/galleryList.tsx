import React, { useState, useEffect, useRef } from "react";
import SlideShow from "./slideshow";

export default function GalleryList({ folder, onBack }) {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isSlideshow, setIsSlideshow] = useState(false);

  useEffect(() => {
    async function fetchImages(folder) {
      const response = await fetch(`/api/cloudinary?folder=${folder}`);
      const data = await response.json();
      setImages(data);
    }
    fetchImages(folder);
  }, [folder]);

  const startSlideshow = (index = 0) => {
    setSelectedIndex(index);
    setIsSlideshow(true);
  };

  if (isSlideshow) {
    return (
      <SlideShow
        folder={folder}
        startIndex={selectedIndex}
        onBack={() => setIsSlideshow(false)}
      />
    );
  }

  return (
    <div className="gallery-all-container">
      <div className="gallery-list-all-container">
        <button
          className="gallery-list-button left-button"
          style={{ animationDelay: "1s" }}
          onClick={onBack}
        >
          All Galleries
        </button>
        <button
          className="gallery-list-button right-button"
          style={{ animationDelay: "1s" }}
          onClick={() => startSlideshow(0)}
        >
          Slideshow
        </button>
      </div>
      <p></p>
      {images.length > 0 && (
        <div className="gallery-all-photo-wrapper">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="gallery-all-image"
              onClick={() => startSlideshow(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
