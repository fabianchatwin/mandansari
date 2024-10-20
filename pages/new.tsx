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


  const handleBackToButtons = () => {
    router.push("/gallery");
  };

  return (
    <>
        <div className="container">
            <div className="photo-wrapper" >
                <img
                    src={`https://media.fafalala.org/${images[currentIndex]}`}
                    className="front-image animating"
                    id="slideshow-image"
                    ref={slideshowImageRef}
                />
            </div>
            <h1 className="content-intro">

            <div className="">
                <div className="ita">✨Half Year Aniversary!✨</div>
            </div>
            </h1>            
            <div className="donation-button-container">
            <button onClick={toggleLanguage}>
                <span className={isEnglish ? "uk-flag active" : "uk-flag"}>🇬🇧</span>
                <span className={isEnglish ? "ita-flag" : "ita-flag active"}>🇮🇹</span>
              </button>
            </div>

            <DonationUpdate2 isEnglish={isEnglish} />
            <section id="new-gallery" style={{ paddingTop: '100px', marginTop: '-100px' }}>
                <GalleryList folder="NEW" onBack={handleBackToButtons} />
            </section>
        </div>
    </>
  );
};

export default NewPhotosPage;
