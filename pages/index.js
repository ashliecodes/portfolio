import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import portfolioPic from "../images/portfolioPic.jpg";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>&lt;/ashliecodes&gt;</title>
        <meta
          name="description"
          content="Portfolio created by &lt;/ashliecodes&gt;"
        />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.wrapper}>
          <section className={styles.intro}>
            <section className={styles.firstMessage}>
              Hi there, my name is <span className={styles.myName}>Ashlie</span>
              <br />
              and I am a
            </section>
            <div className={styles.fullstackMessage}>
              <ul className={styles.dynamicText}>
                <li>
                  <span className={styles.transitionWords}>developer</span>
                </li>
                <li>
                  <span className={styles.transitionWords}>designer</span>
                </li>
                <li>
                  <span className={styles.transitionWords}>tech-lover</span>
                </li>
              </ul>
            </div>
          </section>
          <i className={styles.imgContainer}>
            <Image
              className={styles.homeImg}
              src={portfolioPic}
              height="200px"
              width="210px"
              alt="a picture of ashlie"
            />
          </i>
        </div>
        <p className={styles.description}>
          I&apos;m a London based full-stack software developer who enjoys
          creating and problem-solving. I love all things UI and front-end, so
          the ability to design and build applications to create the best
          possible user experience is something I&apos;m very passionate about!
        </p>
        <div className={styles.btnContainer}>
          <a href="ashliecv.pdf" target="_blank">
            <button className={styles.btn}>resume</button>
          </a>
        </div>
        <br />
        <Footer />
      </main>
    </div>
  );
}
