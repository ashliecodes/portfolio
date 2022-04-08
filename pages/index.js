import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import portfolioPic from "../images/portfolioPic.jpg";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>&lt;ashliecodes/&gt;</title>
        <meta
          name="description"
          content="Portfolio created by &lt;ashliecodes/&gt;"
        />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.wrapper}>
          <section className={styles.intro}>
            Hi!
            <br />
            my name is <span className={styles.myName}>Ashlie</span>
            <br />
            and I&apos;m a
            <div className={styles.fullstackMessage}>
              full-stack developer<span className={styles.fullstop}>.</span>
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
          creating and problem-solving.
          <br />
          <br />I love all things UI and front-end, so the ability to design and
          build applications to create the best possible user experience is
          something I&apos;m very passionate about!
        </p>
        <div className={styles.btnContainer}>
          <a href="ashliecv.pdf" target="_blank">
            <button className={styles.btn}>resume</button>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <button className={styles.footerIcons}>
          <a
            href="https://twitter.com/ashliecodes"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size="40px" />
          </a>
        </button>

        <button className={styles.footerIcons}>
          <a
            href="https://www.linkedin.com/in/ashlie-p-a0131317a/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size="40px" />
          </a>
        </button>
        <button className={styles.footerIcons}>
          <a
            href="https://github.com/ashliecodes"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size="40px" />
          </a>
        </button>
      </footer>
    </div>
  );
}
