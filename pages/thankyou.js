import Footer from "../components/Footer/Footer";
import styles from "../styles/thankyou.module.scss";

function Thankyou() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <section className={styles.intro}>
            Thank you for your message, I&apos;ll get back to you soon.
            <br />
            <br />
            <span className={styles.myName}>Take care!</span>
            <br />
            <br />
            <Footer />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Thankyou;
