import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
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
        <h2 className={styles.title}>
          Hi! My name is Ashlie and I&apos;m a full-stack developer.
        </h2>

        {/* <div>
          I&apos;m a London based full-stack software developer who enjoys
          creating and problem-solving.
          <br />I love all things UI and design, so the ability to design and
          build applications to create the best possible user experience is
          something I am very passionate about!
        </div> */}

        <p className={styles.description}>
          I&apos;m a London based full-stack software developer who enjoys
          creating and problem-solving.
          <br />I love all things UI, so the ability to design and build
          front-end applications to create the best possible user experience is
          something I&apos;m very passionate about!
        </p>
      </main>
      <div className={styles.btnContainer}>
        <a href="ashliecv.pdf" target="_blank">
          <button className={styles.resumeBtn}>Resume</button>
        </a>
      </div>
      <footer className={styles.footer}>
        <button className={styles.footerIcons}>
          <Link href="https://twitter.com/ashliecodes" passHref>
            <FaTwitter size="40px" />
          </Link>
        </button>

        <button className={styles.footerIcons}>
          <Link href="https://www.linkedin.com/in/ashlie-p-a0131317a/" passHref>
            <FaLinkedin size="40px" />
          </Link>
        </button>
        <button className={styles.footerIcons}>
          <Link href="https://github.com/ashliecodes" passHref>
            <FaGithub size="40px" />
          </Link>
        </button>
      </footer>
    </div>
  );
}
