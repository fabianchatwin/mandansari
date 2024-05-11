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
      <div className="fixed-bg bg-10">
        <div className="title">The fafalala informal Support Network</div>
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

      <div className="scroll-bg faq">
        <div className="textLeft">
          <strong>FAQQQSS</strong>
          <p></p>
          <strong>So what do I have to do? </strong>
          <strong>
            <div className="ita">Ma quindi cosa devo fare?</div>
          </strong>
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
    </div>
  );
}
