import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import DonationUpdate1 from "@components/DonationUpdate1";

const images = [
  "lot_people-15.jpg",
  "group_1-15.jpg",
  "group_dinner1.jpg",
  "group_2-15.jpg",
  "group_4-15.jpg"
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideshowImageRef = useRef<HTMLImageElement>(null);
  const brevoFormRef = useRef<HTMLIFrameElement>(null);
  const router = useRouter();
  const [isEnglish, setIsEnglish] = useState(true);

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
        if (formWidth < 560) formHeight = 360;
        if (formWidth < 530) formHeight = 380;
        if (formWidth < 520) formHeight = 400;
        if (formWidth < 440) formHeight = 450;
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

  const handleNewClick = () => {
    router.push("/new");
  };


  const goFundme = () => {
    router.push("https://gofund.me/b734c85c");
  };

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };


  return (
    <>
      <div className="container">
        <div className="photo-wrapper" onClick={handleGalleryClick} >
          <img
            src={`https://media.fafalala.org/${images[currentIndex]}`}
            className="front-image animating"
            id="slideshow-image"
            ref={slideshowImageRef}
          />
        </div>
        <div className="content-wrapper">
          <div className="content-gallery">
            <div className="gallery-button" onClick={handleGalleryClick}>Wedding Gallery</div>
            <div className="gallery-button gallery-button-new" onClick={handleNewClick}>✨New Photos✨</div>
          </div>
          <h2 className="content-intro">
          <div className="donation-button-container">
              <button onClick={toggleLanguage}>
                <span className={isEnglish ? "uk-flag active" : "uk-flag"}>🇬🇧</span>
                <span className={isEnglish ? "ita-flag" : "ita-flag active"}>🇮🇹</span>
              </button>
            </div>
            {isEnglish ? (
              <>
                The fafalala Support Network is the crowdfunding project started at Fabian and Lia's wedding.
                <p></p>
                <div className="ita">
                  Our mission is to empower less fortunate individuals with opportunities for growth and advancement.
                </div>
              </>
            ) : (
              <>
                La rete di supporto fafalala è il progetto di crowdfunding avviato al matrimonio di Fabian e Lia.
                <p></p>
                <div className="ita">
                  La nostra missione è quella di dare potere alle persone meno fortunate, offrendo loro opportunità di crescita e progresso.
                </div>
              </>
            )}
          </h2>
          <p></p>
          <div className="content-subscribe">
            <div className="column-1">
              <h2>
                {isEnglish ? (
                  <>
                    Collected: 9,205 euro
                    <br></br>
                    <button onClick={goFundme}>SUPPORT US</button>
                    <p></p>
                    Join the mailing list to follow what we do with this money!
                  </>
                ) : (
                  <>
                    Raccolti: 9,205 euro
                    <br></br>
                    <button onClick={goFundme}>SOSTIENICI</button>
                    <p></p>
                    Iscriviti alla newsletter per seguire come utilizziamo questi fondi!
                  </>
                )}
              </h2>

            </div>
            <div className="column-2">
              <iframe
                ref={brevoFormRef}
                className="brevo-form"
                src="https://3fa9f914.sibforms.com/serve/MUIFABecKqW4ufh5bo07w_eFgpuWYxE5pfvFz3ERhbLY4u_FttGxboevgWRkNucBxNVF6Jvbwon5nhW7XfJSrBJsHsZguoIxQl2uKiPktxGVDCmUHPcO-5lTHnmUHP5USdgJxQBSXu9C0anWGvxoIMOBORtXfNg5jXokSaEq0bheiIQZqjEOjLvtaZohMWo9ATAFYzsMgaOIR0xm"
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
          <div className="textLeft content-blog">
            {isEnglish ? (
              <>
                <h2>Thank you all for your donations!</h2>
                <p>
                  Thank you for participating in our wedding weekend! It was wonderful to see everyone together, reconnecting with old friends, and building new connections.
                </p>
                <p>
                  Your contributions have been generous! Lia and Fabian now have the responsibility to manage your donations. We will keep you updated on how we plan to use the money we have received. Join our mailing list to follow the story!
                </p>
              </>
            ) : (
              <>
                <h2>Grazie a tutti per le vostre donazioni!</h2>
                <p>
                  Grazie per aver partecipato al nostro weekend di nozze! È stato meraviglioso vedere tutti insieme, riconnettersi con vecchi amici e costruire nuove connessioni.
                </p>
                <p>
                  Le vostre donazioni sono state generose! Lia e Fabian hanno ora la responsabilità di gestire le vostre donazioni. Vi terremo aggiornati su come pianifichiamo di utilizzare i soldi ricevuti. Iscrivetevi alla nostra mailing list per seguire la storia!
                </p>
              </>
            )}
            <DonationUpdate1 isEnglish={isEnglish} />
          </div>
        </div>
        <div className="footer-spacer">&nbsp;</div>
        <div className="footer">
          Fafalala is not an official organization (yet) but just a group of friends that want to do something good.
          <br></br>
          Reach us on gmail at fabianchatwin or liamandansari22.
        </div>
      </div>
    </>
  );
}
