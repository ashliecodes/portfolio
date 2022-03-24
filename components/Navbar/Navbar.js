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
        <div className={styles.navlinks}>
          <Link href={"/about"}>
            <a>about</a>
          </Link>
          <Link href={"/projects"}>
            <a>projects</a>
          </Link>
          <Link href={"/contact"}>
            <a>contact</a>
          </Link>
        </div>
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
