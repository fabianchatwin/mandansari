import FeedbackForm from "@components/FeedbackForm";
import React, { useEffect } from "react";
import BrevoForm from "@components/BrevoForm";
import DonationUpdate1 from "@components/DonationUpdate1";

export default function Home() {
  useEffect(() => {
    const imageElement = document.querySelector(".bg-1") as HTMLElement;
    if (imageElement) {
      imageElement.style.opacity = "1";
    }
    const titleElement = document.querySelector(".title") as HTMLElement;
    if (titleElement) {
      titleElement.style.opacity = "1";
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="fixed-bg bg-10">
        <div className="title">
          Welcome to the fafalala informal Support Network
        </div>
      </div>

      <div className="scroll-bg">
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
          <a href="">Wedding Photos</a>
          <br></br>
        </h2>
      </div>

      <div className="scroll-bg faq">
        <div className="textLeft">
          <DonationUpdate1 />
        </div>
      </div>
    </div>
  );
}
