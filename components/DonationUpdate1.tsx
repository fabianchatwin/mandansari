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
      <div id="eng">
      <h3>Update 2 June 2024
        <button onClick={() => scrollToSection('eng')}>ENG</button>
        <button onClick={() => scrollToSection('ita')}>ITA</button>
      </h3>

        <h3>1. This is the beginning of lalafafa!</h3>
        <p>
          So if you are reading this you probably get it. We dream to take the occasion of our wedding 
          to make some impact on people that didn't had the same opportunites that most of us had. 
          </p>
          <p>
          Easy to say, so difficult to do right?
          Well we don't know where will get to, how much we can do and dedicate. But we are going to try 
          and you are our contributor and we hope you can follow our story, we want to keep you updated of 
          every step of this adventure!
          </p>
          <p>
          This website is both .wtf and .org! Is both the wedding photo and video gallery for our memories 
          and the place to tell the donation adventure.
          If you have more photos or videos of the event that you want to save for this memory please send to us 
          and we can add to the gallery!
          </p>
          <p>
          Why are we not using social media? Well we considered, and maybe we will do something later on, 
          but we are not ready to shout loud to everyone about it yet, first we want to experiment by ourselves
          and communicate with our network (you!) and see how it goes. So for the moment we wanted to establish a base, 
          a home, which is this website. Let's take one step at a time.
        </p>
        <p>
          We took the liberty to automatically add you to our mailing list, as our core group of supporters. 
          I hope is ok for you and you are not going to unsubscribe straight away!
          We are not going to send too many emails, don't worry.
          We are also going to start a <a href="https://www.medium.com">Medium channel</a> with the same content, that's the only social media we are going 
          to use for now.
        </p>

        <h3>2. Donation Calculations</h3>
        <p>
          We received €8,315 from GoFundMe. GoFundMe charges a whopping 2.9% fee for private funding. 
          That’s a lot to pay for the convenience of the platform! 
          Next time, it might be better to set up an alternative or a personal website.
        </p>
        <p>
          We also received €890 in alternative donations from people who didn’t
          want to use the platform, in the form of cash, bank and crypto transfers.
        </p>
        <h3>3. Doing it right: save and wait</h3>
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
          it will take time and effort to make them a reality. <strong>We don’t feel we
          can do this by staying here in Italy.</strong> We need to return to Indonesia and
          help them with tasks such as finding the right location for their new
          venture, helping Maya transition away from her current job, and
          supporting the beginning of their new adventure.
        </p>
        <p>
          Therefore for the moment we have decided to put the money in a dedicated savings account, 
          which will give also some return to protect from inflation.
        </p>
        <h3>4. What's next?</h3>
        <p>
          This 2024 year will be a transition year, we probably need to go back and fouth Italy and Indonesia 
          a few times, to do things like papers, settling (we are looking into building a house in the village in Java), 
          taking care of family, adjusting our jobs.
        </p>        
        <p>
          Probably by end 2024 - begin 2025 we can begin to really spend time with Maya and Nur and do what
          we really is important to us: <strong>make a change</strong>.
        </p> 
        <p>
          Please stay in touch with us, on the whatsapp group or privately as you prefer, share any thought you have, 
          this is virgin territory for most of us. 
        </p> 
      </div>
      <hr></hr>
      <div id="ita">
      <h3>Aggiornamento 2 Giugno 2024
        <button onClick={() => scrollToSection('eng')}>ENG</button>
        <button onClick={() => scrollToSection('ita')}>ITA</button>
      </h3>
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
