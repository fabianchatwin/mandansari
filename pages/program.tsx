import React, { useEffect } from "react";

const Program: React.FC = () => {
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
    <>
        <div className="wrapper">
            <div className="title">
              💕💍<br></br>
              Program
              <br></br>🎉🥂
            </div>
            <div className="program">
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
              Recommended parking arriving by car:
https://maps.app.goo.gl/EXihjUKd5C9mQckx6
(Keep the parking ticket with you) 

13:30 - pre wedding warm up
@monkey bar piazza capitaniato
https://maps.app.goo.gl/q79jMSmD77XyGvfr7

15:00 - ceremony 
@Salla della Gran Guardia Piazza dei Signori
https://maps.app.goo.gl/LFkrDjPwTct3H8S58

16.45 - offical party
@Ristorante Trattoria Al Bosco
https://maps.app.goo.gl/3SCqoFSLVrBLWheRA

01.00 - the night
@Anima Underground
https://maps.app.goo.gl/RN5BY46ae1cBa1iQ9

Sunday - chill out 
@Parco Degli Alpini
https://maps.app.goo.gl/KZkYLtMEo8mUpEoD7
            </div>
        </div>
    </>
  );
};

export default Program;
