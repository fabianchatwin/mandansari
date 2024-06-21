import React, { useState, useEffect } from "react";
import SlideShow from "./slideshow";

export default function GalleryList({ folder, onBack }) {
  const [items, setItems] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    async function fetchItems() {
      if (folder === "OFFICIALVIDEOS") {
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

  const startSlideshow = (index = 0, paused = false) => {
    setSelectedIndex(index);
    setIsSlideshow(true);
    setIsPaused(paused);
  };

  const isVideoFolder = folder.toLowerCase().includes("video");

  if (isSlideshow) {
    return (
      <SlideShow
        folder={folder}
        startIndex={selectedIndex}
        onBack={() => setIsSlideshow(false)}
        paused={isPaused}
      />
    );
  }

  const googlePhotosLinks = {
    BUFFETPARTY: 'https://photos.app.goo.gl/cbSpefVZXsLvknsu8',
    DINNER: 'https://photos.app.goo.gl/u9tJSevrgB1r2EYq5',
    SUNDAY: 'https://photos.app.goo.gl/g7iLb2g9nQveKYe67',
    GROUPS: 'https://photos.app.goo.gl/LMDcnmXrawtQRA316',
    KIDS: 'https://photos.app.goo.gl/MbMMxvmYQmU714jX6',
    FABIANLIA: 'https://photos.app.goo.gl/m3pEYzVx4767RakJ7',
    GRANGUARDIA: 'https://photos.app.goo.gl/gWxZZc8GNcBZhMzv5'

  };

  const googlePhotosLink = googlePhotosLinks[folder] || '#';

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
            onClick={() => startSlideshow(0,false)}
          >
            Slideshow
          </button>
        )}
         {googlePhotosLink !== '#' && (        
          <button
            className="gallery-list-button right-button"
            style={{ animationDelay: "1s" }}
            onClick={() => window.open(googlePhotosLink, '_blank')}
        >
          <img src="google_photos.png" alt="Google Photos" style={{  height: '45px' }} />
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
                  onClick={() => startSlideshow(index,true)}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
