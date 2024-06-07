import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import DonationUpdate1 from "@components/DonationUpdate1";

const images = [
  "lot_people-15.jpg",
  "group_1-15.jpg",
  "group_2-15.jpg",
  "group_3-15.jpg",
  "group_4-15.jpg",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideshowImageRef = useRef<HTMLImageElement>(null);
  const brevoFormRef = useRef<HTMLIFrameElement>(null);
  const router = useRouter();

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

  useEffect(() => {
    const resizeBrevoForm = () => {
      const column2 = document.querySelector(".column-2");
      if (column2 && brevoFormRef.current) {
        const formWidth = column2.clientWidth;
        let formHeight = 330; 
        if (formWidth < 560) {
          formHeight = 360;
        }
        if (formWidth < 530) {
          formHeight = 380;
        }
        if (formWidth < 520) {
          formHeight = 400;
        }
        if (formWidth < 440) {
          formHeight = 450;
        }
        brevoFormRef.current.style.width = `${formWidth}px`;
        brevoFormRef.current.style.height = `${formHeight}px`;
      }
    };

    resizeBrevoForm();
    window.addEventListener("resize", resizeBrevoForm);
    return () => window.removeEventListener("resize", resizeBrevoForm);
  }, []);

  const handleGalleryClick = () => {
    router.push("/gallery");
  };

  return (
    <>
      <div className="container">
        <div className="photo-wrapper" onClick={handleGalleryClick} >
          <img
            src={`/${images[currentIndex]}`}
            className="front-image animating"
            id="slideshow-image"
            ref={slideshowImageRef}
          />
        </div>
        <div className="content-wrapper">
          <div className="content-gallery" onClick={handleGalleryClick} style={{ cursor: "pointer" }}>
            <h2 className="gallery-button">Wedding Photo Gallery</h2>
          </div>
          <h2>
            The fafalala Support Network is the crowdfunding project started at Fabian and Lia wedding.
            <p></p>
            <div className="ita">
              Our mission is to empower less fortunate individuals with opportunities for growth and advancement.
            </div>
          </h2>
          <div className="content-subscribe">
            <div className="column-1">
              <h2>
                Collected: 9,205 euro!
                <p></p>
                Thank you all!
                <p></p>
                Enter your email to know what to do with this money!
              </h2>
            </div>
            <div className="column-2">
              <iframe
                ref={brevoFormRef}
                className="brevo-form"
                src="https://3fa9f914.sibforms.com/serve/MUIFAMFiOEZeTr-xFQkL0kgNOiMmLa6dNH-DzvhT-WtoaHyxzwEiBh2lD45uBuJ4aVHiZqrcla3c-WKqWhWpecjKI4hxftV3Xq-SsRuNtNwlVvYtzjgS5g-n2ctRoWFHN8Qux-rRw3_iujM0nlFnDjUUUiFzhT09py2qQBfCEei1QMfi3hyNIVoLpdaGBMOXuK926tqfhqzoS4rn"
                frameBorder="0"
                allowFullScreen
                scrolling="auto"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></iframe>
            </div>
          </div>
          <h2>
            <a href="https://gofund.me/b734c85c">Our original crowdfunding project</a>
          </h2>
          <hr></hr>
          <div className="textLeft content-blog">
            <DonationUpdate1 />
          </div>
        </div>
      </div>
    </>
  );
}
