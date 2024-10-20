import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SlideShow({ folder, startIndex = 0, onBack, paused = false }) {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(startIndex);
  const [isPaused, setIsPaused] = useState(paused);
  const [isCover, setIsCover] = useState(false);
  const [intervalDuration, setIntervalDuration] = useState(5);
  const [secondsRemaining, setSecondsRemaining] = useState(intervalDuration);
  const touchStartX = useRef(null);

  useEffect(() => {
    async function fetchImages(folder) {
      let response;
      if (folder === "BUFFETPARTY") {
        response = await fetch("/api/list-images?bucketName=wedding-buffetparty");
      } else if (folder === "NEW") {
        response = await fetch("/api/list-images?bucketName=wedding-new");
      } else {
        response = await fetch(`/api/cloudinary?folder=${folder}`);
      }
      const data = await response.json();
      setImages(data);
    }

    fetchImages(folder);
  }, [folder]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setSecondsRemaining(intervalDuration);
      }
    }, intervalDuration * 1000);

    return () => clearInterval(interval);
  }, [images.length, isPaused, intervalDuration]);

  useEffect(() => {
    if (isPaused || secondsRemaining <= 0) return;

    const countdown = setInterval(() => {
      setSecondsRemaining((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, [isPaused, secondsRemaining]);

  /*
  //doesn't work

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentImageIndex]);  
*/

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setSecondsRemaining(intervalDuration);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
    setSecondsRemaining(intervalDuration);
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
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const toggleTimer = () => {
    setIntervalDuration((prevDuration) => {
      const newDuration = prevDuration === 5 ? 10 : 5;
      setSecondsRemaining(newDuration); // Ensure the countdown is in sync
      return newDuration;
    });
  };
  

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = images[currentImageIndex];
    link.download = `image-${currentImageIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getAuthorDetails = (image) => {
    if (!image) {
      return null;
    }
    const folderNamesAlice = ["BUFFETPARTY", "DINNER", "GROUPS", "KIDS", "LIFABIAN"];
    const folderNamesPicSim = ["GRANGUARDIA"];
    const fileName = image.split("/").pop();
    const doesNotContainAliceKeywords = !fileName.includes("contributed") && !fileName.includes("noalice");
    const doesNotContainPicSimKeywords = !fileName.includes("contributed") && !fileName.includes("nopiccirilli");

    if (folderNamesAlice.includes(folder) && doesNotContainAliceKeywords) {
      return { link: "https://www.instagram.com/alicedonaggio", className: "instagram-alice" };
    }
    if (folderNamesPicSim.includes(folder) && doesNotContainPicSimKeywords) {
      return { link: "https://www.instagram.com/pic.sim", className: "instagram-picsim" };
    }
    return null;
  };

  const authorDetails = images.length > 0 ? getAuthorDetails(images[currentImageIndex]) : null;

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
                className={`
                  gallery-front-image 
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
          <button className="gallery-timer-button" onClick={toggleTimer}>
            {secondsRemaining}
          </button>
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
          <button
            className="gallery-download-button"
            onClick={downloadImage}
          >
            <FontAwesomeIcon icon="download" />
          </button>
          {authorDetails && (
            <button className={`gallery-instagram-button ${authorDetails.className}`}
            onClick={() => window.open(authorDetails.link, '_blank')}
            >
            </button>
          )}          
        </>
      )}
    </div>
  );
}
