import React from "react";
import styles from "../styles/contact.module.scss";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {
  const [done, setDone] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        //"service_c71xyka "
        "outlook ",
        "template_7lwkj1l",
        e.target,
        "v69MsIuj0hEGECeK4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className={styles.contactForm}>
      <h2 className={styles.projectTitle}>projects:</h2>
      <form onSubmit={sendEmail}>
        <label>
          name:
          <input type="text" name="name" placeholder="Your name" required />
        </label>

        <label>
          subject:
          <input type="text" name="subject" placeholder="Subject" required />
        </label>

        <label>
          email:
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
        </label>

        <label>
          message:
          <input type="text" name="message" placeholder="Message" required />
        </label>

        <button type="submit">Send</button>
        <p>{done && "Message sent, thank you!"}</p>
      </form>
    </div>
  );
}

export default Contact;
