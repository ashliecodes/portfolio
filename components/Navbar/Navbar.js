import Link from "next/link";
import styles from "./navbar.module.scss";

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <a>&lt;ashliecodes/&gt;</a>
          </Link>
        </div>
        <Link href={"/about"}>
          <a>about</a>
        </Link>
        <Link href={"/projects"}>
          <a>projects</a>
        </Link>
        <Link href={"/contact"}>
          <a>contact</a>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
