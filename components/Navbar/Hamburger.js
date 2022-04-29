import styles from "./navbar.module.scss";
import Link from "next/link";

function HamburgerMenu() {
  return (
    <div>
      <li className={styles.navLinks}>
        <Link href="/about" passHref>
          <a className={styles.hamItems}>
            <span className={styles.hamTags}>&lt;/</span> about
            <span className={styles.hamTags}>&gt;</span>
          </a>
        </Link>
      </li>

      <br />
      <li className={styles.navLinks}>
        <Link href="/projects" passHref>
          <a className={styles.hamItems}>
            <span className={styles.hamTags}>&lt;/</span> projects
            <span className={styles.hamTags}>&gt;</span>
          </a>
        </Link>
      </li>
      <br />
      <li className={styles.navLinks}>
        <Link href="/contact" passHref>
          <a className={styles.hamItems}>
            <span className={styles.hamTags}>&lt;/</span> contact
            <span className={styles.hamTags}>&gt;</span>
          </a>
        </Link>
      </li>
      <li className={styles.navLinks}>
        <div className={styles.btnContainer}>
          <a href="ashliecv.pdf" target="_blank">
            <button className={styles.btn}>resume</button>
          </a>
        </div>
      </li>
    </div>
  );
}

export default HamburgerMenu;
