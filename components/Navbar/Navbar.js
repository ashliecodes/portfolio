import Link from "next/link";
import styles from "./navbar.module.scss";
import Navlinks from "./Navlinks";

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>
          <Navlinks navLinks={"/"} name={"ashliecodes"} />
        </h1>

        <div className={styles.navContainer}>
          <Navlinks navLinks={"/about"} name={"about"} />
          <Navlinks navLinks={"/projects"} name={"projects"} />
          <Navlinks navLinks={"/contact"} name={"contact"} />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

{
  /* <div className={styles.logo}>
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
        </div> */
}
