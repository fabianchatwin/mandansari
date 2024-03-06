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
        <h4>Padova</h4>
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
          wedding gift?
          <br />
          <div className="gold">
            <br />
            <a href="https://gofund.me/b734c85c">click here</a>
          </div>
        </h4>
      </div>

      <div className="scroll-bg">
        <div className="textLeft">
          <strong>FAQQQSS</strong>
          <p></p>
          <strong>So what I have to do? /Ma quindi cosa devo fare?</strong>
          fill the form below <div className="ita">compila il modulo sotto</div>
          <p></p>
          <strong>Dinner? / Cena? </strong>
          don't worry we got you covered
          <div className="ita">Tranqui ci pensiamo noi</div>
          <p></p>
          <strong>How about hotels transportations and stuff?</strong>
          <strong>
            <div className="ita">Ma hotel e spostamenti e balle varie?</div>
          </strong>
          just fill the form below
          <div className="ita">tu compila il modulo</div>
          <p></p>
          <strong>I want to buy you a wedding Gift!</strong>
          <strong>
            <div className="ita">Voglio comprare un regalo di matrimonio!</div>
          </strong>
          We thought a lot about this. Please contribute to our{" "}
          <a href="https://gofund.me/b734c85c">gofundme campaign</a>
          <div className="ita">
            Abbiamo pensato un sacco a sta cosa. Per fovore partecipa alla
            nostra <a href="https://gofund.me/b734c85c">campagna gofundme</a>
          </div>
        </div>
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
