import styles from "./FeedbackForm.module.css";

export default function FeedbackForm() {
  return (
    <form
      className={styles.form}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="feedback"
      method="POST"
      action="/success"
    >
      <input type="hidden" name="form-name" value="feedback" />
      <p className={styles.hidden}>
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <label htmlFor="name">Your name or your family name</label>
      <input
        id="name"
        className={styles["form-field"]}
        type="text"
        name="name"
      />
      <label htmlFor="number">How many are you?</label>
      <input
        id="number"
        className={styles["form-field"]}
        type="number"
        name="number"
        min="1"
        max="6"
        required
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        className={styles["form-field"]}
        type="email"
        name="email"
        required
      />
      <label htmlFor="whatsapp">Whatsapp</label>
      <input
        id="whatsapp"
        className={styles["form-field"]}
        type="text"
        name="whatsapp"
      />
      <label htmlFor="car">
        The most important question!
        <br />
        Really important for our planning! <br />
        Do you have a car or do you want to drive your car?
        <br />
        <div className="ita">
          La domanda più importante!
          <br />
          Veramente importante per organizzarci! <br />
          Hai una macchina o preferisci guidare la tua macchina?
        </div>
      </label>
      <br />
      <input type="radio" id="car" name="car" value="yescar" required /> Yes! I
      am a safe driver!{" "}
      <div className="ita"> Si! Sono un conducente sicuro! </div>
      <br />
      <input type="radio" id="car" name="car" value="nocar" /> I don't have a
      car <div className="ita"> No, non ho una macchina </div>
      <br />
      <input type="radio" id="car" name="car" value="drinkcar" /> WTF are you
      talking about? I want to drink! No drive!{" "}
      <div className="ita">
        {" "}
        Ma di che capperi stai parlando? Io voglio bere! No guidare!{" "}
      </div>
      <br />
      <br />
      <label for="checkboxInput">I have food requests</label>
      <br />
      <input
        type="checkbox"
        id="vegetarian"
        name="foodRequest"
        value="vegetarian"
      />
      Vegetarian
      <br />
      <input type="checkbox" id="vegan" name="foodRequest" value="vegan" />
      Vegan
      <br />
      <input
        type="checkbox"
        id="gluten-free"
        name="foodRequest"
        value="gluten-free"
      />
      Gluten-free <br />
      <input
        type="checkbox"
        id="dairy-free"
        name="foodRequest"
        value="dairy-free"
      />
      Dairy-free <br />
      <input type="checkbox" id="halal" name="foodRequest" value="halal" />
      Halal <br />
      <input
        type="checkbox"
        id="alchool-based"
        name="foodRequest"
        value="alchool-based"
      />
      Alchool Based
      <br />
      <br />
      <br />
      <label for="checkboxInput">Do you need a hotel recommendation?</label>
      <br />
      <input type="checkbox" id="hotel" name="otherRequests" value="hotel" />
      Yes guys! Please give me a hotel recommendation
      <br />
      <br />
      <label htmlFor="name">What is the magic word?</label>
      <input
        id="magicword"
        className={styles["form-field"]}
        type="text"
        name="magicword"
        required
      />
      <br />
      <label htmlFor="feedback">Anything else you want us to know?</label>
      <textarea
        id="feedback"
        className={styles["form-field"]}
        wrap="soft"
        name="feedback"
        required
      ></textarea>
      <button className={styles.button} type="submit">
        LETS GO!
      </button>
    </form>
  );
}
