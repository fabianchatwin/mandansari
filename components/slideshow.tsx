import React, { useState, useEffect, useRef } from "react";

export default function SlideShow({ folder, startIndex = 0, onBack }) {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(startIndex);
  const [isPaused, setIsPaused] = useState(false);
  const [isCover, setIsCover] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(5);
  const touchStartX = useRef(null);

  useEffect(() => {
    async function fetchImages(folder) {
      const response = await fetch(`/api/cloudinary?folder=${folder}`);
      const data = await response.json();
      setImages(data);
    }

    fetchImages(folder);

    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setSecondsRemaining(5);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length, isPaused]);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (!isPaused && secondsRemaining > 0) {
        setSecondsRemaining((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [isPaused, secondsRemaining]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const togglePause = () => {
    setIsPaused((prevPaused) => !prevPaused);
  };

  const toggleCover = () => {
    setIsCover((prevCover) => !prevCover);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!isPaused) {
      if (touchStartX.current - e.changedTouches[0].clientX > 50) {
        nextImage();
      } else if (e.changedTouches[0].clientX - touchStartX.current > 50) {
        prevImage();
      }
    }
  };

  const handleFullscreen = () => {
    const elem = document.documentElement;
    if (
      !document.fullscreenElement
      ) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } 
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } 
    }
  };

  return (
    <div className="gallery-container">
      <button className="gallery-go-list-button" onClick={onBack}>
        EXIT
      </button>
      {images.length > 0 && (
        <>
          <button className="gallery-counter-button">
            {currentImageIndex + 1} / {images.length}
          </button>
          <div
            className="gallery-photo-wrapper"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className={ `gallery-front-image 
                  ${index === currentImageIndex ? "active" : "inactive"} 
                  ${index === currentImageIndex && !isPaused ? "animating" : ""}
                  ${isCover ? "gallery-cover" : "gallery-contain"}
                  `}
              />
            ))}
          </div>
          <button className="gallery-prev-button" onClick={prevImage}>
            &lt;
          </button>
          <button className="gallery-next-button" onClick={nextImage}>
            &gt;
          </button>
          <button className="gallery-pause-button" onClick={togglePause}>
            {isPaused ? "PLAY" : "PAUSE"}
          </button>
          <button className="gallery-timer-button">{secondsRemaining}</button>
          <button
            className="gallery-fullscreen-button"
            onClick={handleFullscreen}
          >
            FULLSCREEN
          </button>
          <button
            className="gallery-fit-button"
            onClick={toggleCover}
          >
            {isCover ? "COVER" : "CONTAIN"}
          </button>

        </>
      )}
    </div>
  );
}
