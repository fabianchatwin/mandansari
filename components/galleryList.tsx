import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function GalleryList({ folder }) {
  const [images, setImages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchImages(folder) {
      const response = await fetch(`/api/cloudinary?folder=${folder}`);
      const data = await response.json();
      setImages(data);
    }

    fetchImages(folder);
  }, [folder]);

  const handleClick = (index) => {
    router.push(`/gallery_router?folder=${folder}&startIndex=${index}&list=0`);
  };

  const galleryAll = () => {
    router.push("/open_gallery");
  };

  return (
    <div className="gallery-all-container">
      <div className="gallery-list-all-container">
        <button
          className="gallery-list-button left-button"
          style={{ animationDelay: "1s" }}
          onClick={() => galleryAll()}
        >
          All Galleries
        </button>
        <button
          className="gallery-list-button right-button"
          style={{ animationDelay: "1s" }}
          onClick={() => handleClick(0)}
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
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
