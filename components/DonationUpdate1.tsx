import React from "react";

const DonationUpdate: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: top,
        left: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <h3>Update 2 June 2024 
        <button onClick={() => scrollToSection('eng')}>ENG</button>
        <button onClick={() => scrollToSection('ita')}>ITA</button>
        </h3>
      
      <div id="eng">
      <h3>Donation Calculations</h3>
      <p>
        We received €8,315 from GoFundMe. GoFundMe charges a whopping 2.9% fee
        for private funding. That’s a lot to pay for the convenience of the
        platform! Next time, it might be better to set up an alternative or a
        personal website.
      </p>
      <p>
        We also received €890 in alternative donations from people who didn’t
        want to use the platform, in the form of cash, bank and crypto transfers.
      </p>
      <h3>Donation Calculations</h3>
      <p>
        We have realized that this is just the beginning of an adventure! It’s
        difficult to imagine simply transferring the money to Maya and Nur's
        accounts and hoping for the best. They have never seen such a large
        amount of money all at once, and we are a little worried about their
        reactions. It could range from wasting the money to simply not believing
        it’s possible. They might even suspect some sort of trick or expect
        something in return.
      </p>
      <p>
        More than just money, we need to instill an entrepreneurial attitude. We
        need to convey the idea that their dreams are now within reach, and that
        it will take time and effort to make them a reality. We don’t feel we
        can do this by staying here in Italy. We need to return to Indonesia and
        help them with tasks such as finding the right location for their new
        venture, helping Maya transition away from her current job, and
        supporting the beginning of their new adventure.
      </p>
      <p>
        Therefore, we have decided to put the total of €XXXX in a separate
        deposit account.
      </p>
      </div>
      <hr></hr>
      <div id="ita">
      <h3>Calcolo Donazioni</h3>
      <p>
        We received €8,315 from GoFundMe. GoFundMe charges a whopping 2.9% fee
        for private funding. That’s a lot to pay for the convenience of the
        platform! Next time, it might be better to set up an alternative or a
        personal website.
      </p>
      </div>
    </div>
  );
};

export default DonationUpdate;
