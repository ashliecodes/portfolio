import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./footer.module.scss";

function Footer() {
  return (
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
  );
}

export default Footer;
