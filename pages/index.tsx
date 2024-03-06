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
        <h1>
          3pm <br />
          Saturday <br />
          20-04-2024
        </h1>
      </div>

      <div className="fixed-bg bg-3">
        <h4>where?</h4>
        <h1>Palazzo Gran Guardia</h1>
      </div>

      <div className="fixed-bg bg-4">
        <h4>where is that</h4>
        <h1>Padova</h1>
      </div>

      <div className="fixed-bg bg-5">
        <h1>Celebration and Dinner Party</h1>
      </div>

      <div className="fixed-bg bg-6">
        <h1>
          After Party <br />
          Chillout <br /> Sunday
        </h1>
        <h4>location to be announced</h4>
      </div>

      <div className="fixed-bg bg-7">
        <h4>
          how about the wedding gift?
          <br />
          <div className="gold">
            DONT'T BUY STUFF
            <br />
            <a href="https://www.gofundme.com"> support our gofundme</a>
          </div>
        </h4>
      </div>

      <div className="scroll-bg">
        <strong>FAQQQSS</strong>
        <p></p>
        <strong>So what I have to do?</strong>
        meet at 3pm at{" "}
        <a href="https://maps.app.goo.gl/X7K3hKa1ypiKuU549">
          Palazzo della Gran Guardia, Padova
        </a>
        <p></p>
        <strong>Dinner ?</strong>
        don't worry we got you covered
        <p></p>
        <strong>How about hotels transportations and stuff?</strong>
        please fill the form below and you gonna know
        <p></p>
        <strong>I want to buy you a wedding Gift!</strong>
        We thought a lot about this. Please contribute to our
        <a href="https://www.gofundme.com">gofundme campaign</a>.
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
