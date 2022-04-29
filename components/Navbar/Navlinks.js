import Link from "next/link";
import styles from "./navbar.module.scss";

function Navlinks({ navLinks, name }) {
  return (
    <Link href={navLinks} passHref>
      <a className={styles.navItems}>
        <span className={styles.navTags}>&lt;/</span>
        {name}
        <span className={styles.navTags}>&gt;</span>
      </a>
    </Link>
  );
}

export default Navlinks;
