import React from "react";

interface DonationProps {
  isEnglish: boolean;
}

const DonationUpdate: React.FC<DonationProps> = ({ isEnglish }) => {
  return (
    <>
      <div id="eng" className={`content-donation ${isEnglish ? 'active' : ''}`}>
      <h3>Update 2 June 2024
      </h3>
      <h3>1. This is the beginning of lalafafa!</h3>
        <p>
          If you are reading this, you probably understand our vision. We dream of using our wedding as an opportunity to make a positive impact on those less fortunate. Starting with two individuals: Maya and Nur.
        </p>
        <p>
          Easy to say, but difficult to do, right? We don't know where this journey will take us or how much we can accomplish, but we are committed to trying. You are our contributor, and we hope you can follow our story. We want to keep you updated on every step of this adventure!
        </p>
        <p>
          This website serves dual purposes. It is both the wedding photo and video gallery for our memories and the platform to share our donation journey. If you have more photos or videos from the event that you want to add to the gallery, please send them to us!
        </p>
        <p>
          Why aren't we using social media? We considered it, and maybe we will in the future, but for now, we want to experiment and communicate with our network (you!). We wanted to establish a base, a home, which is this website. Let's take one step at a time.
        </p>
        <p>
          We took the liberty of automatically adding you to our mailing list as our core group of supporters. We hope this is okay with you, and that you won't unsubscribe! We promise not to send many emails. We will also start a <a href="https://www.medium.com">Medium channel</a> with the same content, which will be the only social media we use for now.
        </p>
        <h3>2. Donation Calculations</h3>
        <p>
          We received €8,315 from GoFundMe. GoFundMe charges a 2.9% fee for private funding. That’s a significant amount to pay for the convenience of the platform! Next time, we might consider an alternative or a personal website.
        </p>
        <p>
          We also received €890 in alternative donations from people who didn’t want to use the platform, in the form of cash, bank, and crypto transfers.
        </p>
        <h3>3. Doing it right: Save and Wait</h3>
        <p>
          We realize this is just the beginning of an adventure! It’s difficult to imagine simply transferring the money to Maya and Nur and hoping for the best. They have never seen such a large amount of money all at once, and we are concerned about their reactions. They might waste the money, not believe it's real, suspect a trick, or expect something in return.
        </p>
        <p>
          More than just money, we need to instill an entrepreneurial attitude. We need to convey that their dreams are now within reach, but it will take time and effort. <strong>We don’t feel we can do this from Italy.</strong> We need to return to Indonesia to help them find the right location for their new venture, assist Maya in transitioning from her current job, and support the start of their new journey.
        </p>
        <p>
          For now, we have decided to put the money in a dedicated savings account, which will also earn some interest to protect against inflation.
        </p>
        <h3>4. What's Next?</h3>
        <p>
          This year, 2024, will be a transition year. We will probably need to travel back and forth between Italy and Indonesia a few times to handle paperwork, settle in (we are looking into building a house in the village in Java), take care of family, and adjust our jobs.
        </p>        
        <p>
          By the end of 2024 or the beginning of 2025, we hope to spend more time with Maya and Nur and focus on what really matters to us: <strong>making a change</strong>.
        </p> 
        <p>
          Please stay in touch with us, whether through the WhatsApp group or privately, as you prefer. Share any thoughts you have; this is new territory for most of us.
        </p>
        <p className="vert-space" >
        With gratitude and love,
        <br></br><br></br>
        Fabian and Lia
        </p> 
      </div>
      <div id="ita" className={`content-donation ${isEnglish ? '' : 'active'}`}>
      <h3>Aggiornamento 2 Giugno 2024</h3>
      <h3>1. Questo è l'inizio di lalafafa!</h3>
        <p>
          Se stai leggendo questo, probabilmente capisci la nostra visione. Sogniamo di usare il nostro matrimonio come un'opportunità per avere un impatto positivo su coloro che sono meno fortunati. Iniziando con due persone: Maya e Nur.
        </p>
        <p>
          Facile a dirsi, ma difficile da fare, giusto? Non sappiamo dove ci porterà questo viaggio o quanto possiamo realizzare, ma siamo impegnati a provarci. Sei il nostro contributore, e speriamo che tu possa seguire la nostra storia. Vogliamo tenerti aggiornato su ogni passo di questa avventura!
        </p>
        <p>
          Questo sito web serve a due scopi. È sia la galleria di foto e video del matrimonio per i nostri ricordi, sia la piattaforma per condividere il nostro percorso di donazione. Se hai altre foto o video dell'evento che desideri aggiungere alla galleria, inviacele!
        </p>
        <p>
          Perché non usiamo i social media? Ci abbiamo pensato, e forse lo faremo in futuro, ma per ora vogliamo sperimentare e comunicare con il nostro network (voi!). Volevamo stabilire una base, una casa, che è questo sito web. Facciamo un passo alla volta.
        </p>
        <p>
          Ci siamo presi la libertà di aggiungerti automaticamente alla nostra mailing list come gruppo principale di sostenitori. Speriamo che sia ok per te e che non ti disiscriverai subito! Promettiamo di non inviare molte email. Inizieremo anche un <a href="https://www.medium.com">canale Medium</a> con lo stesso contenuto, che sarà l'unico social media che utilizzeremo per ora.
        </p>

        <h3>2. Calcoli delle Donazioni</h3>
        <p>
          Abbiamo ricevuto €8.315 da GoFundMe. GoFundMe addebita una commissione del 2,9% per i finanziamenti privati. È una somma significativa da pagare per la comodità della piattaforma! La prossima volta, potremmo considerare un'alternativa o un sito web personale.
        </p>
        <p>
          Abbiamo anche ricevuto €890 in donazioni alternative da persone che non volevano usare la piattaforma, sotto forma di contanti, bonifici bancari e trasferimenti di criptovaluta.
        </p>

        <h3>3. Fare le cose per bene: Risparmiare e Aspettare</h3>
        <p>
          Ci rendiamo conto che questo è solo l'inizio di un'avventura! È difficile immaginare di trasferire semplicemente il denaro a Maya e Nur sperando per il meglio. Non hanno mai visto una somma così grande tutta in una volta, e siamo preoccupati per le loro reazioni. Potrebbero sprecare i soldi, non credere che sia reale, sospettare un trucco o aspettarsi qualcosa in cambio.
        </p>
        <p>
          Più che denaro, dobbiamo instillare un atteggiamento imprenditoriale. Dobbiamo trasmettere che i loro sogni sono ora a portata di mano, ma ci vorranno tempo e sforzi. <strong>Non sentiamo di poterlo fare dall'Italia.</strong> Dobbiamo tornare in Indonesia per aiutarli a trovare la giusta location per la loro nuova impresa, assistere Maya nella transizione dal suo attuale lavoro e supportare l'inizio del loro nuovo percorso.
        </p>
        <p>
          Per ora abbiamo deciso di mettere i soldi in un conto di risparmio dedicato, che guadagnerà anche un po' di interesse per proteggersi dall'inflazione.
        </p>

        <h3>4. E adesso?</h3>
        <p>
          Quest'anno, il 2024, sarà un anno di transizione. Probabilmente dovremo viaggiare avanti e indietro tra Italia e Indonesia alcune volte per gestire le pratiche burocratiche, sistemarci (stiamo pensando di costruire una casa nel villaggio in Java), occuparci della famiglia e aggiustare i nostri lavori.
        </p>        
        <p>
          Entro la fine del 2024 o l'inizio del 2025, speriamo di poter trascorrere più tempo con Maya e Nur e concentrarci su ciò che è veramente importante per noi: <strong>fare la differenza</strong>.
        </p> 
        <p>
          Per favore, resta in contatto con noi, sia tramite il gruppo WhatsApp o privatamente, come preferisci. Condividi qualsiasi pensiero tu abbia; questo è un territorio inesplorato per la maggior parte di noi.
        </p>
        <p className="vert-space">
          Con gratitudine e amore,
          <br></br><br></br>
          Fabian e Lia
        </p> 
      </div>
    </>
  );
};

export default DonationUpdate;
