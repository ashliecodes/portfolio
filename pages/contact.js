import React from "react";
import styles from "../styles/contact.module.scss";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c71xyka ",
        "template_7lwkj1l",
        form.current,
        "v69MsIuj0hEGECeK4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className={styles.contactForm}>
      <h2 className={styles.projectTitle}>projects:</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Subject
          <input type="text" name="subject" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Message
          <textarea name="message" />
          <input type="submit" value="Send" />
        </label>
      </form>
    </div>
  );
}

export default Contact;
