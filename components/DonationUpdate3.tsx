import React from "react";

interface DonationProps {
  isEnglish: boolean;
}

const DonationUpdate: React.FC<DonationProps> = ({ isEnglish }) => {
  return (
    <>
      <hr />
      <div id="eng" className={`content-donation ${isEnglish ? 'active' : ''}`}>
        <h3>Update: April 20, 2025 📅</h3>
        <h3>What your wedding gift made possible - thank you!</h3>
        <p>
          Can you believe it’s already been a year since that wild weekend in Padova? 🎉 People coming and going, noise, dancing, things lost and found—it was pure chaos and pure fun. We’re still so grateful for the memories… and the love you shared with us on that special occasion 💕.
        </p>
        <p>
          As promised, here’s a little update from our end! 📨
        </p>
        <p>
          We finally made the move from Italy to Indonesia in February—later than expected, thanks to a mix of paperwork and a few unexpected delays 🗂️✈️. But we hit the ground running. We’ve been working on a few things: built drainage at the land (still unsure if it’ll become our home or a business 🏡🏗️), rented an office space in the city for Fabian to focus 💻, and are now renovating part of Lia’s family house 🛠️. Life’s been pretty full—definitely more sweat than beach time! ☀️😅
        </p>
        <p>
          <b>But the most important news is this one…</b>
        </p>
        <div className="photo-wrapper" >
          <img src="market.JPG" />
        </div>
        <p>
          <b>Thanks to your wedding donations, Lia’s brother Nur now has a pickup van! 🚛🎁</b>
        </p>
        <p>
          Nur is a father of two and has been working informally, going house to house collecting broken or unused items—things people no longer want or need 🔧🪑. He checks if they can be repaired, reused, or passed along. At first, he was unsure about accepting help—he thought we were offering a loan and wasn’t sure how he could ever pay it back. It took some time to explain that this wasn’t about repayment. This was a gift, from all of you, to make something good happen 🎁❤️.
          Someone might see him as just a “trash collector”… but to us, he’s something else entirely.
        </p>
        <p>
          Nur is a Circular Economy hero—with boots on the ground! 🥾♻️🌏
        </p>
        <p>
          Even if he’s never heard the term, that’s exactly what he is. In a place like Indonesia, where pollution and waste are everyday challenges 🗑️🌊 and public waste management often doesn’t reach rural areas, Nur is part of the solution. He gives new life to discarded items, keeps them out of rivers and fields, and helps people in the community get access to low-cost essentials. That’s real impact 🙌.
          And yes—he did once carry a fridge on his motorbike. 😳🛵
        </p>
        <div className="photo-wrapper" >
          <img src="market.JPG" />
        </div>
        <p>
          But of course, that wasn’t going to work forever. Renting a mini truck cost too much and made the job unprofitable 💸. So with Lia’s help, Nur searched around… and they found it: a Suzuki Carry for €2,550! 🚐✨
        </p>
        <p>
          Now Nur’s fully in business. With his new Carry, he can work more efficiently, earn more steadily, and build a better future for his family 🧰👨‍👩‍👧‍👦
        <p>
          Please continue to follow our journey: via email, whatsapp group or our <a href="https://medium.com/@fabianchatwin">Medium channel</a> 🙏.
        </p>
        <div className="photo-wrapper" >
          <img src="market.JPG" />
        </div>
        <p>
          None of this would have happened without your support 💛
        </p>
        <p>
          You donated a total of €9,432. After Nur’s van, we’ve kept the remaining €6,882 in a savings account 🏦. We’ll continue to look for the next opportunity where your generosity can have real impact—like this one 🌱.
       </p>
        <p>
         📊 Donations Update – Transparency is love
       </p>
        <p>
          💰 Total donated: €9,432
          🚐 Spent: €2,550 – 1 Suzuki Carry for Nur
          🏦 Remaining: €6,882 – safely saved for future opportunities
        </p>
        <p>
            Thank you again, from the bottom of our hearts.
        </p>
        <p className="vert-space">
            More stories coming soon! 🌺💌
          <br /><br />
            Big hug from here,
          <br /><br />
            Fabian & Lia          
        </p>
      </div>

      <div id="ita" className={`content-donation ${isEnglish ? '' : 'active'}`}>
        <h3>Update: April 20, 2025 📅</h3>
        <h3>Ecco cosa è successo con il tuo regalo di matrimonio - thank you!</h3>
        <p>
          Riuscite a credere che sia già passato un anno da quel weekend folle a Padova? 🎉 Gente che andava e veniva, rumore, balli, cose perse e ritrovate—un vero caos, ma bellissimo. Siamo ancora super grati per i ricordi… e per l’amore che ci avete regalato in quell’occasione speciale 💕.
        </p>
        <p>
          Come promesso, eccoci con un piccolo aggiornamento! 📨
        </p>
        <p>
          Ci siamo finalmente trasferiti dall’Italia all’Indonesia a febbraio—più tardi del previsto, a causa di un po’ di burocrazia e qualche imprevisto 🗂️✈️. Ma siamo partiti subito con un sacco di energia! Abbiamo fatto i lavori di drenaggio nel terreno (ancora non sappiamo se diventerà casa nostra o un’attività 🏡🏗️), affittato un ufficio in città per far concentrare Fabian 💻, e ora stiamo ristrutturando una parte della casa di famiglia di Lia 🛠️. Insomma, un bel da fare—decisamente più sudore che mare! ☀️😅
        </p>
        <p>
          <b>Ma la notizia più importante è questa…</b>
        </p>
        <div className="photo-wrapper" >
          <img src="market.JPG" />
        </div>
        <p>
          <b>Grazie alle vostre donazioni per il nostro matrimonio, il fratello di Lia, Nur, ha un furgoncino tutto suo! 🚛🎁</b>
        </p>
        <p>
          Nur è papà di due bambini e lavora in modo informale, andando di casa in casa a raccogliere oggetti rotti o inutilizzati—cose che le persone non vogliono più 🔧🪑. Guarda se si possono riparare, riutilizzare o regalare. All'inizio era un po' titubante ad accettare il nostro aiuto—pensava si trattasse di un prestito e non sapeva come avrebbe potuto restituirlo. Ci è voluto un po’ per spiegargli che non volevamo nulla indietro. Questo è un regalo, da parte di tutti voi, per fare del bene 🎁❤️.
          Molti potrebbero vederlo come un semplice "raccoglitore di rifiuti"… ma per noi è molto di più.
        </p>
        <p>
          Nur è un eroe dell’economia circolare—con gli stivali sul campo! 🥾♻️🌏
        </p>
        <p>
          Anche se non ha mai sentito il termine, è esattamente quello che fa. In un paese come l’Indonesia, dove l’inquinamento e i rifiuti sono un problema quotidiano 🗑️🌊 e lo smaltimento pubblico spesso non arriva nei villaggi, Nur fa la differenza. Ridà vita agli oggetti scartati, li tiene lontani da fiumi e campi, e aiuta la comunità a trovare soluzioni a basso costo. Questo è impatto vero 🙌.
          E sì—ha davvero trasportato un frigorifero sul motorino. 😳🛵
        </p>
        <div className="photo-wrapper" >
          <img src="market.JPG" />
        </div>
        <p>
          Ma ovviamente non poteva continuare così. Noleggiare un mini furgone costava troppo e non gli permetteva di guadagnare abbastanza 💸. Così, con l’aiuto di Lia, Nur ha cercato in giro… e l’ha trovato: un Suzuki Carry per €2.550! 🚐✨
        </p>
        <p>
          Ora Nur è pronto. Con il suo nuovo Carry, può lavorare meglio, guadagnare in modo più stabile, e costruire un futuro più sereno per la sua famiglia 🧰👨‍👩‍👧‍👦

        <div className="photo-wrapper" >
          <img src="market.JPG" />
        </div>
        <p>
          Tutto questo non sarebbe stato possibile senza il vostro supporto 💛
        </p>
        <p>
          Avete donato un totale di €9.432. Dopo l'acquisto del furgone, abbiamo lasciato i restanti €6.882 in un conto risparmio 🏦. Continueremo a cercare la prossima occasione in cui il vostro aiuto potrà fare una vera differenza 🌱.
       </p>
        <p>
         📊 Donations Update – Transparency is love
       </p>
        <p>
          💰 Total donated: €9,432
          🚐 Spent: €2,550 – 1 Suzuki Carry for Nur
          🏦 Remaining: €6,882 – safely saved for future opportunities
        </p>
        <p>
          Thank you again, from the bottom of our hearts.
        </p>
        <p className="vert-space">
            Al prossimo aggiornamento! 🌺💌
          <br /><br />
            Un abbraccio grande da qui,
          <br /><br />
            Fabian & Lia          
        </p>
      </div>
    </>
  );
};

export default DonationUpdate;
