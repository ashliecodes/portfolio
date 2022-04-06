import React from "react";
import styles from "../styles/contact.module.scss";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oou9z0a",
        "template_7lwkj1l",
        form.current,
        "v69MsIuj0hEGECeK4"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED", error.text);
        }
      );
    form.current.reset();
  }

  return (
    <div className={styles.contactForm}>
      <h2 className={styles.projectTitle}>contact:</h2>

      <form ref={form} onSubmit={sendEmail}>
        <h4 className={styles.formLabel}>
          Name
          <input className={styles.formInput} type="text" name="user_name" />
        </h4>
        <h4 className={styles.formLabel}>
          Subject
          <input className={styles.formInput} type="text" name="user_subject" />
        </h4>
        <h4 className={styles.formLabel}>
          Email
          <input className={styles.formInput} type="email" name="user_email" />
        </h4>
        <h4 className={styles.formLabel}>
          Message
          <textarea
            className={styles.formArea}
            rows="5"
            type="text"
            name="user_message"
          />
          <input className={styles.btn} type="submit" value="send" />
        </h4>
      </form>
    </div>
  );
}

export default Contact;
