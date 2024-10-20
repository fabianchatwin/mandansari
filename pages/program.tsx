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
          <br></br> 💕💍<br></br>
          Program
          <br></br>
        </div>
        <div className="program">
          <div>
            <h3>Have you made a donation to our Crowdfunding?</h3>
            <a href="https://gofund.me/9adbae85">
              A Wedding Gift of Hope: Maya's Dream Warung
            </a>
          </div>

          <div>
            <h3>Recommended car parking:</h3>
            <a href="https://maps.app.goo.gl/EXihjUKd5C9mQckx6">
              Car Park Padua city centre
            </a>
            <div className="ita">(Keep the parking ticket with you)</div>
            <div className="ita">
              (the parking is close to the arrival of the Parade)
            </div>
          </div>
          <div>
            <h3>Hotel for those who have a room:</h3>
            <a href="https://maps.app.goo.gl/2b2hY8jTS4sQJ9cg6">
              AC Hotel by Marriott Padova
            </a>
            <div className="ita">
              (the hotel is 14min walk from the nightclub)<br></br>
              (consider checking in before starting so you can get ready)
            </div>
          </div>
          <hr></hr>
          <div>
            <h2>13:30 - Pre Wedding warm up</h2>
            <a href="https://maps.app.goo.gl/q79jMSmD77XyGvfr7">
              @monkey bar
            </a>{" "}
            Piazza Capitaniato
          </div>
          <div>
            <h2>15:00 - Ceremony</h2>
            <a href="https://maps.app.goo.gl/q79jMSmD77XyGvfr7">
              @Sala della Gran Guardia
            </a>{" "}
            Piazza dei Signori
          </div>
          <div>
            <h2>15:45 - City Parade</h2>
            Departure from Ceremony location<br></br>
            Arrival at{" "}
            <a href="https://maps.app.goo.gl/WraEGKR4xJxxKaaZA">
              Liceo Selvatico
            </a>
          </div>
          <div>
            <h2>16:15 - Trip to restaurant</h2>
            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTPxxtKhKTUjZJHBbV_2whdNPXPsMAQQoCQCoPQlawbo_RxSWPRUw0xnuC3oDt75JJPUTG8Aop3dai0/pubhtml">
              Wedding BUS passengers
            </a>
            <div className="ita">
              The bus will be waiting at Parade arrival<br></br>
              For those going by car the parking is 200m
            </div>
          </div>
          <div>
            <h2>16:45 - Restaurant Official Party</h2>
            <a href="https://maps.app.goo.gl/3SCqoFSLVrBLWheRA">
              @Ristorante Trattoria Al Bosco
            </a>
            <br></br>
            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRV7sMs2BY8erdPWDMUwLaOY8f7w7KG7GyPfQHjvO5MsgiQ-2DxkijnbWpNwFclH6zMHgLkHSIoc8sB/pubhtml?gid=539220598&single=true">
              Tableau de Marriage
            </a>
            <div className="ita">
              17:00 Musical Buffet<br></br>
              20:00 Dinner<br></br>
              22:00 Dance<br></br>
            </div>
          </div>
          <div>
            <h2>00:30 - The Return</h2>
            <div className="ita">
              Bus stops: <br></br>
              1.{" "}
              <a href="https://maps.app.goo.gl/vAVd3BBFRfLZxVDd6">
                Hotel Terme Antoniano - Montegrotto
              </a>
              <br></br>
              2.{" "}
              <a href="https://maps.app.goo.gl/RN5BY46ae1cBa1iQ9">
                Club Anima Underground - Padova
              </a>
              <br></br>
              3.{" "}
              <a href="https://maps.app.goo.gl/2b2hY8jTS4sQJ9cg6">
                AC Hotel - Padova
              </a>
              <br></br>
              4.{" "}
              <a href="https://maps.app.goo.gl/EXihjUKd5C9mQckx6">
                Car Park Padua City Centre
              </a>
              <br></br>
            </div>
          </div>
          <div>
            <h2>01:00 - The Night</h2>
            <a href="https://maps.app.goo.gl/RN5BY46ae1cBa1iQ9">
              @Anima Underground
            </a>
            <div className="ita">
              We have some tables reserved<br></br>
              Closing at 4am<br></br>
              Walkable to hotel<br></br>
              Taxi Padova: +39 049651333<br></br>
            </div>
          </div>
          <div>
            <h2>3pm Sunday - chill out</h2>
            <a href="https://maps.app.goo.gl/KZkYLtMEo8mUpEoD7">
              @Parco Degli Alpini
            </a>
            <div className="ita">
              Music Band<br></br>
              Pasta Pizza and Beer<br></br>
              Open invitation bring your friends!<br></br>
            </div>
          </div>
        </div>
        <div>
          <h1>
            <img src="/hongkong1.jpg" className="smallimage" />
            <br></br>
            🎉🥂
          </h1>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default Program;
