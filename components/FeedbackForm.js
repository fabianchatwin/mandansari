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
        This is the most important question. <br />
        It is really important for our internal planning! <br />
        Do you have a car or do you want to drive your car
      </label>
      <br />
      <input type="radio" id="car" name="car" value="yescar" required /> Yes! I
      am a safe driver!
      <br />
      <input type="radio" id="car" name="car" value="nocar" /> I don't have a
      car
      <br />
      <input type="radio" id="car" name="car" value="drinkcar" /> I want to
      drink!
      <br />
      <br />
      <label htmlFor="sliderInput">Select a step:</label>
      <input
        type="range"
        id="sliderInput"
        name="sliderInput"
        min="1"
        max="5"
        step="1"
        value="1"
      />
      <br />
      <br />
      <label htmlFor="feedback">What is your feedback?</label>
      <textarea
        id="feedback"
        className={styles["form-field"]}
        wrap="soft"
        name="feedback"
        required
      ></textarea>
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
}
