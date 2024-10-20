import React from "react";

interface DonationProps {
  isEnglish: boolean;
}

const DonationUpdate: React.FC<DonationProps> = ({ isEnglish }) => {
  return (
    <>
      <hr />
      <div id="eng" className={`content-donation ${isEnglish ? 'active' : ''}`}>
        <h3>Update: October 20, 2024 📅</h3>
        <h3>1. Six Months Have Passed 🎉</h3>
        <p>
          Can you believe it? Six months have already flown by since Lia and Fabian's wedding! It may not seem like much, but for us, 2024 has been a truly transformative year!
        </p>
        <p>
          So many changes—family, settling in, work—everything is in motion and evolving, both as a couple and as individuals. It's a whirlwind, but we're embracing it!
        </p>
        <h3>2. New Photos 📸</h3>
        <p>
          We are excited to share that we've received new photo contributions! A big thank you to Brian, Mauro, and Claudia for your amazing additions! 
          Please take a look at the <a href="/gallery?selectedFolder=NEW&showSubfolders=false">new additions</a>!
        </p>
        <p>
          We encourage anyone who would like to share more photos from our event to send them our way. We will keep them on this website as cherished memories for years to come.
        </p>
        <h3>3. Donation Update 💰</h3>
        <p>
          We've received additional donations, and we now have a total of €9,374 set aside! They're safely maturing in the savings account for the time being.
        </p>
        <p>
          However, we still need to wait ⏳ before we can transform your generous contributions into tangible support. We're navigating some personal decisions right now, but <strong>patience will guide us</strong>. We need to sort through our situation in Italy before we can return to Indonesia to help Maya and Nur embark on their new journey.
        </p>
        <p>
          Please continue to follow our journey: via email, whatsapp group or our <a href="https://medium.com/@fabianchatwin">Medium channel</a> 🙏.
        </p>
        <p className="vert-space">
          With gratitude and love,
          <br /><br />
          Fabian and Lia 💖
        </p>
      </div>

      <div id="ita" className={`content-donation ${isEnglish ? '' : 'active'}`}>
        <h3>Aggiornamento: 20 Ottobre 2024 📅</h3>
        <h3>1. Sono passati sei mesi 🎉</h3>
        <p>
          Puoi crederci? Sono già volati sei mesi da quando Lia e Fabian si sono sposati! Potrebbe non sembrare molto, ma per noi il 2024 è stato un anno davvero trasformativo!
        </p>
        <p>
          Così tanti cambiamenti: famiglia, sistemazione, lavoro—tutto è in movimento ed evolve, sia come coppia che come individui. È un vortice, ma lo stiamo abbracciando!
        </p>
        <h3>2. Nuove foto 📸</h3>
        <p>
          Siamo entusiasti di condividere che abbiamo ricevuto nuove foto! Un grande grazie a Brian, Mauro e Claudia per le vostre fantastiche aggiunte! Dai un'occhiata alle <a href="/gallery?selectedFolder=NEW&showSubfolders=false">nuove aggiunte</a>!
        </p>
        <p>
          Incoraggiamo chiunque voglia condividere ulteriori foto del nostro evento a inviarcele. Le conserveremo su questo sito come ricordi preziosi per gli anni a venire.
        </p>
        <h3>3. Aggiornamento sulle donazioni 💰</h3>
        <p>
          Abbiamo ricevuto ulteriori donazioni e ora abbiamo un totale di 9.374 € messi da parte! Sono al sicuro in un conto di risparmio per il momento.
        </p>
        <p>
          Tuttavia, dobbiamo ancora aspettare ⏳ prima di poter trasformare le vostre generose donazioni in un supporto concreto. Stiamo affrontando alcune decisioni personali in questo momento, ma <strong>la pazienza ci guiderà</strong>. Dobbiamo sistemare la nostra situazione in Italia prima di poter tornare in Indonesia per aiutare Maya e Nur a intraprendere il loro nuovo viaggio.
        </p>
        <p>
          Contina a seguire la nostra avventura: via email, gruppo whatsapp o il nostro <a href="https://medium.com/@fabianchatwin">canale Medium</a> 🙏.
        </p>        
        <p className="vert-space">
          Con gratitudine e amore,
          <br /><br />
          Fabian e Lia 💖
        </p>
      </div>
    </>
  );
};

export default DonationUpdate;
