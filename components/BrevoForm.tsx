// components/BrevoForm.tsx
import React, { useEffect } from "react";
import styles from "./BrevoForm.module.css"; // Import CSS module

const BrevoForm: React.FC = () => {
  useEffect(() => {
    const form = document.getElementById("sib-form");
    form?.addEventListener("submit", handleSubmit);

    function handleSubmit(event: Event) {
      event.preventDefault();
      const formData = new FormData(form as HTMLFormElement);
      const action = (form as HTMLFormElement).action;
      const options = {
        method: "POST",
        body: formData,
      };

      fetch(action, options)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            document
              .getElementById("error-message")
              ?.classList.remove("hidden");
          } else {
            document
              .getElementById("success-message")
              ?.classList.remove("hidden");
            form?.classList.add("hidden");
          }
        })
        .catch(() => {
          document.getElementById("error-message")?.classList.remove("hidden");
        });
    }

    return () => {
      form?.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <div className={styles.sibForm}>
      <div id="sib-form-container" className={styles.sibFormContainer}>
        <div
          id="error-message"
          className={`${styles.sibFormMessagePanel} hidden ${styles.errorMessage}`}
        >
          <div className={styles.sibFormMessagePanelText}>
            <svg viewBox="0 0 512 512" className={styles.sibIcon}>
              <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
            </svg>
            <span>Your subscription could not be saved. Please try again.</span>
          </div>
        </div>
        <div
          id="success-message"
          className={`${styles.sibFormMessagePanel} hidden ${styles.successMessage}`}
        >
          <div className={styles.sibFormMessagePanelText}>
            <svg viewBox="0 0 512 512" className={styles.sibIcon}>
              <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S399.391 8 257 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
            </svg>
            <span>Your subscription has been successful.</span>
          </div>
        </div>
        <div id="sib-container" className={styles.sibContainer}>
          <form
            id="sib-form"
            method="POST"
            action="https://3fa9f914.sibforms.com/serve/MUIFANV5VY7zAgau3JJnK6dvcgy3f2Mg-Be-r0kcF4fKDllGXz3BaFoYqlRQRvtk2FDg98SQit08_WGecnnnJf6glH-VlCj2O3HT_9xp_qz-l1ybLQq4u-_ql7gCIOINpjCDzEliewpyegTRi_DN30Qj8ryGDZrTSxt0Q145F3C7pBEUKVZTFn7h2Zym58rIbtAKKLfXDkRqvhQW"
            data-type="subscription"
          >
            <div className={styles.sibFormBlock}>
              <div className={styles.sibTextFormBlock}>
                <p>Subscribe to the fafalala newsletter to stay updated!</p>
                <p>We send about one email per month</p>
              </div>
            </div>
            <div className={styles.sibFormBlock}>
              <div className={styles.sibInput}>
                <div className={styles.formEntry}>
                  <div className={styles.formLabelRow}>
                    <label
                      className={styles.entryLabel}
                      htmlFor="EMAIL"
                      data-required="*"
                    >
                      Enter your email address to subscribe
                    </label>
                    <div className={styles.entryField}>
                      <input
                        className={styles.input}
                        type="text"
                        id="EMAIL"
                        name="EMAIL"
                        autoComplete="off"
                        placeholder="EMAIL"
                        data-required="true"
                        required
                      />
                    </div>
                  </div>
                  <label className={styles.entryError}></label>
                  <label className={styles.entrySpecification}>
                    Provide your email address to subscribe. For e.g abc@xyz.com
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.sibFormBlock}>
              <div className={styles.sibOptin}>
                <div className={styles.formEntry}>
                  <div className={styles.formLabelRow}>
                    <div className={styles.entryChoice}>
                      <label>
                        <input
                          type="checkbox"
                          className={styles.inputReplaced}
                          value="1"
                          id="OPT_IN"
                          name="OPT_IN"
                        />
                        <span
                          className={`${styles.checkbox} ${styles.checkboxTickPositive}`}
                        ></span>
                        <span className={styles.checkboxText}>
                          <p>
                            I agree that fafalala can store my email and send me
                            a newsletter.
                          </p>
                        </span>
                      </label>
                    </div>
                  </div>
                  <label className={styles.entryError}></label>
                </div>
              </div>
            </div>
            <div className={styles.sibFormBlock}>
              <div className={styles.sibFormBlockButton}>
                <button
                  className={styles.sibFormBlockButtonWithLoader}
                  form="sib-form"
                  type="submit"
                >
                  <svg className={styles.icon} viewBox="0 0 512 512">
                    <path d="M257 0C114.609 0 0 114.615 0 257s114.609 257 257 257 257-114.615 257-257S399.391 0 257 0zm0 472C131.383 472 40 380.617 40 257S131.383 42 257 42s217 91.383 217 215-91.383 215-217 215z" />
                  </svg>
                  Subscribe
                </button>
              </div>
            </div>
            <div className={styles.sibFormBlock}>
              <div className={styles.sibFormBlockText}>
                <p>
                  You can unsubscribe at any time using the link in our emails.
                  For more details, review our{" "}
                  <a
                    href="https://www.sendinblue.com/legal/termsofuse/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
            <input
              type="text"
              name="email_address_check"
              value=""
              className={styles.inputHidden}
            />
            <input type="hidden" name="locale" value="en" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BrevoForm;
