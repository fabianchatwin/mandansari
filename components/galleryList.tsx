import React, { useState, useEffect } from "react";
import SlideShow from "./slideshow";

export default function GalleryList({ folder, onBack }) {
  const [items, setItems] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isSlideshow, setIsSlideshow] = useState(false);

  useEffect(() => {
    async function fetchItems() {
      if (folder === "ALLVIDEOS") {
        setItems([
          "https://media.fafalala.org/Venice.mov",
          "https://media.fafalala.org/LIAFABIAN2024-10000.mp4",
        ]);
      } else {
        const response = await fetch(`/api/cloudinary?folder=${folder}`);
        const data = await response.json();
        setItems(data);
      }
    }
    fetchItems();
  }, [folder]);

  const startSlideshow = (index = 0) => {
    setSelectedIndex(index);
    setIsSlideshow(true);
  };

  const isVideoFolder = folder.toLowerCase().includes("video");

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
          {"Back"}
        </button>
        {!isVideoFolder && (
          <button
            className="gallery-list-button right-button"
            style={{ animationDelay: "1s" }}
            onClick={() => startSlideshow(0)}
          >
            Slideshow
          </button>
        )}
      </div>
      <p></p>
      {items.length > 0 && (
        <div>
          {isVideoFolder ? (
            items.map((video, index) => (
              <div className="gallery-all-video-wrapper" key={index}>
                <video src={video} controls className="gallery-all-video" />
                <p></p>
              </div>
            ))
          ) : (
            <div className="gallery-all-photo-wrapper">
              {items.map((image, index) => (
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
      )}
    </div>
  );
}
