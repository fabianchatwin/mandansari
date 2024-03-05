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
          Eight years ago, amidst the bustling streets of Hong Kong, our love
          story began. Fabian and Lia's paths crossed in this vibrant city, and
          since then, they've been on an incredible journey filled with
          laughter, adventures, and cherished moments.
          <br></br>
          <br></br>
          Now, as they embark on the next chapter of their lives together, they
          invite you to join them in the romantic city of Padova, Italy, on the
          picturesque date of April 20, 2024, to witness their union and
          celebrate their love.
          <br></br>
          <br></br>
          Their love story is a testament to the magic of fate and the beauty of
          finding your soulmate in unexpected places. From exploring new
          cuisines to conquering new heights, Fabian and Lia have shared
          countless memories that have strengthened their bond and filled their
          hearts with joy.
          <br></br>
          <br></br>
          As they exchange vows amidst the stunning landscapes of Padova,
          surrounded by their beloved family and friends, they look forward to
          creating even more unforgettable moments together. So mark your
          calendars, dust off your dancing shoes, and get ready to celebrate
          love, laughter, and happily ever after with Fabian and Lia!
          <br></br>
          <br></br>
          Stay tuned for more updates and details as we countdown to the big
          day. Let the wedding festivities begin!
          <br></br>
          <br></br>
          With love, Fabian & Lia 💕
        </h2>
      </div>

      <div className="fixed-bg bg-2 ">
        <h1>20 / 04 / 2024</h1>
      </div>

      <div className="fixed-bg bg-3">
        <h1>3PM Palazzo Gran Guardia</h1>
      </div>

      <div className="fixed-bg bg-4">
        <h1>Padova</h1>
      </div>

      <div className="fixed-bg bg-5">
        <h1>Pric prac</h1>
      </div>

      <div className="fixed-bg bg-6">
        <h1>Pric prac</h1>
      </div>

      <div className="scroll-bg">Practical info goe here la</div>

      <div className="scroll-bg">
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
