import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import GalleryList from "@components/galleryList";
import DonationUpdate2 from "@components/DonationUpdate2";

const NewPhotosPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideshowImageRef = useRef<HTMLImageElement>(null);
  const [isEnglish, setIsEnglish] = useState(true);

  const router = useRouter();

  const images = [
    "cedrati_family_1.jpg",
    "alistair_spritz.jpg",
    "filippo_and_son_2.JPG",
    "made_1.jpg",
    "kitti_david_marianna.jpg",
    "lia_cheeky_1.jpg",
    "exchange_flowers_1.jpg",
    "nikola_beppe.jpg",
    "daniele_marco_1.jpg",
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (slideshowImageRef.current) {
        slideshowImageRef.current.classList.add("fade-out");
      }

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        if (slideshowImageRef.current) {
          slideshowImageRef.current.src = `/${images[(currentIndex + 1) % images.length]}`;
          slideshowImageRef.current.classList.remove("fade-out");
        }
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  const handleNewClick = () => {
    router.push("/gallery?selectedFolder=NEW&showSubfolders=false");
  };

  const handleBackToButtons = () => {
    router.push("/gallery");
  };

  return (
    <>
        <div className="container">
            <div className="photo-wrapper" onClick={handleNewClick}>
                <img
                    src={`https://media.fafalala.org/${images[currentIndex]}`}
                    className="front-image animating"
                    id="slideshow-image"
                    ref={slideshowImageRef}
                />
            </div>
            <h1 className="content-intro">
                <div className="">
                    <div className="ita">✨Half Year Anniversary!✨</div>
                </div>
            </h1>            
            <div className="donation-button-container">
            <button onClick={toggleLanguage}>
                <span className={isEnglish ? "uk-flag active" : "uk-flag"}>🇬🇧</span>
                <span className={isEnglish ? "ita-flag" : "ita-flag active"}>🇮🇹</span>
              </button>
            </div>
            <div className="textLeft content-blog">
                <DonationUpdate2 isEnglish={isEnglish} />
            </div>
            <div className="content-gallery">
                <div className="gallery-button gallery-button-new" onClick={handleNewClick}>See the new Photos!</div>
            </div>
            <div className="footer-spacer">&nbsp;</div>
            <div className="footer">
                Fafalala is not an official organization (yet) but just a group of friends that want to do something good.
                <br></br>
                Reach us on gmail at fabianchatwin or liamandansari22.
            </div>
        </div>
    </>
  );
};

export default NewPhotosPage;
