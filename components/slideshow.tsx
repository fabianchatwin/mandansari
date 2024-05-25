import React, { useState, useEffect, useRef } from "react";

export default function SlideShow({ folder, startIndex = 0, onBack }) {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(startIndex);
  const [isPaused, setIsPaused] = useState(false);
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

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!isPaused) {
      if (touchStartX.current - e.changedTouches[0].clientX > 50) {
        // Swipe left
        nextImage();
      } else if (e.changedTouches[0].clientX - touchStartX.current > 50) {
        // Swipe right
        prevImage();
      }
    }
  };

  const handleFullscreen = () => {
    const elem = document.documentElement;
    if (
      !document.fullscreenElement && // alternative standard method
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      // current working methods
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  return (
    <div className="gallery-container">
      <button className="gallery-go-list-button" onClick={onBack}>
        BACK TO GALLERY LIST
      </button>
      {images.length > 0 && (
        <>
          <div className="gallery-counter">
            {currentImageIndex + 1} / {images.length}
          </div>
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
                className={`front-image ${
                  index === currentImageIndex ? "active" : "inactive"
                } ${index === currentImageIndex && !isPaused ? "animating" : ""}`}
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
          <div className="gallery-timer">{secondsRemaining}</div>
          <button
            className="gallery-fullscreen-button"
            onClick={handleFullscreen}
          >
            FULLSCREEN
          </button>
        </>
      )}
    </div>
  );
}
