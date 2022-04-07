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
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.contactForm}>
          <h2 className={styles.contactTitle}>
            <span className={styles.hamTags}>&lt;</span>contact
            <span className={styles.hamTags}>/&gt;</span>
          </h2>

          <form className={styles.contacForm} ref={form} onSubmit={sendEmail}>
            <h4 className={styles.formLabel}>
              Name
              <input
                className={styles.formInput}
                type="text"
                name="user_name"
              />
            </h4>
            <h4 className={styles.formLabel}>
              Subject
              <input
                className={styles.formInput}
                type="text"
                name="user_subject"
              />
            </h4>
            <h4 className={styles.formLabel}>
              Email
              <input
                className={styles.formInput}
                type="email"
                name="user_email"
              />
            </h4>
            <h4 className={styles.formLabel}>
              Message
              <textarea
                className={styles.formArea}
                rows="5"
                type="text"
                name="user_message"
                placeholder="Message"
              />
            </h4>
            <div className={styles.btnSection}>
              <input className={styles.btn} type="submit" value="send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
