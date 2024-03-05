import FeedbackForm from "@components/FeedbackForm";
import React, { useEffect } from "react";

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
      <div className="fixed-bg bg-1">
        <div className="title">
          💕💍<br></br>
          Welcome to Fabian and Lia's Wedding Celebration
          <br></br>🎉🥂
        </div>
      </div>

      <div className="scroll-bg">
        <h2>
          Friends, here we are. Really. Yes.
          <div className="ita">Amici, ci siamo. Veramente. Si. </div>
          <br></br>
          <br></br>
          We are getting married!
          <div className="ita">Ci sposiamo!</div>
          <br></br>
          <br></br>
        </h2>
      </div>

      <div className="fixed-bg bg-2 ">
        <h4>when?</h4>
        <h1>20 - 04 - 2024</h1>
      </div>

      <div className="fixed-bg bg-3">
        <h4>where?</h4>
        <h1>3pm Palazzo Gran Guardia</h1>
      </div>

      <div className="fixed-bg bg-4">
        <h4>where is that</h4>
        <h1>Padova</h1>
      </div>

      <div className="fixed-bg bg-5">
        <h1>Celebration and Dinner Party</h1>
      </div>

      <div className="fixed-bg bg-6">
        <h1>After - Sunday</h1>
      </div>

      <div className="scroll-bg">
        Practical info:
        <p>- meet at 3pm at Palazzo della Gran Guardia, Padova [map]</p>
        <p>- dinner</p>
        what do we need to say here zoul?
      </div>

      <div className="scroll-bg theform">
        <h3>
          Please fill this form to confirm your participation! If you are
          family, send only one form for all the family.
          <div className="ita">
            Per favore compila questo form di partecipazione! Se sei una
            famiglia, compila un solo form per tutta la tua famiglia!
          </div>
        </h3>

        <FeedbackForm />
      </div>
    </div>
  );
}
