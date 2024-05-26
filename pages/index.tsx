import FeedbackForm from "@components/FeedbackForm";
import React, { useState, useEffect } from "react";
import BrevoForm from "@components/BrevoForm";
import DonationUpdate1 from "@components/DonationUpdate1";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const images = [
    "lot_people.jpg",
    "group_1.jpg",
    "group_2.jpg",
    "group_3.jpg",
  ];

  return (
    <>
      <div className="container">
        <div className="photo-wrapper">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={`front-image ${index === currentImageIndex ? "active" : "inactive"}`}
            />
          ))}
        </div>
        <div className="content-wrapper">
          <h2>
            The fafalala Support Network is the crowdfunding project started at
            Fabian and Lia wedding.<br></br>
            <div className="ita">
              Our mission is to empower less fortunate individuals with
              opportunities for growth and advancement.
            </div>
            <iframe
              width="540"
              height="700"
              src="https://3fa9f914.sibforms.com/serve/MUIFAEnKQ86rzjvUO2P3nMrLXNDqB4_V5s6UqlX4Na3yUKamb-3-RCTa1lwJ2eWTWZFOmPX2xOlF4N2PQN3b3iy3gWgkBlU65fwLD3F-9gonXUZrRBDl9lfaxnGc8CJ--A4eMjbrkqdzCmi91YeKrg4WOH_9ILBp19x4Rm-U1QGA_nXE5pap87v_49EIdbOV6154vTYaeDLZTAoS"
              frameBorder="0"
              scrolling="auto"
              allowFullScreen
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "100%",
              }}
            ></iframe>
          </h2>
          <h2>
            <a href="https://gofund.me/b734c85c">
              Our original crowdfunding project
            </a>
          </h2>
          <h2>
            <a href="/gallery">Wedding Gallery</a>
            <br></br>
          </h2>

          <div className="textLeft">
            <DonationUpdate1 />
          </div>
        </div>
      </div>
    </>
  );
}
