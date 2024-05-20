import React, { useState, useEffect } from "react";

export default function Home() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch("/api/cloudinary");
      const data = await response.json();
      setImages(data);
    }

    fetchImages();

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="gallery-container">
      {console.log("hello")}
      {images.length > 0 && (
        <>
          <div className="gallery-counter">
            {currentImageIndex + 1} / {images.length}
          </div>
          <div className="gallery-photo-wrapper">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className={`front-image ${index === currentImageIndex ? "active" : "inactive"}`}
              />
            ))}
          </div>
          <button className="gallery-prev-button" onClick={prevImage}>
            &lt;
          </button>
          <button className="gallery-next-button" onClick={nextImage}>
            &gt;
          </button>
        </>
      )}
    </div>
  );
}
