import React from "react";
import Navlinks from "./Navlinks";
import styles from "./navbar.module.scss";

function HamburgerMenu({ sidebar, showSidebar }) {
  return (
    <div className={styles.displaySidebar} onClick={showSidebar}>
      <li className={styles.navLinks}>
        <Navlinks navLinks={"/about"} name={"about"} />
      </li>
      <li className={styles.navLinks}>
        <Navlinks navLinks={"/skills"} name={"skills"} />
      </li>
      <li className={styles.navLinks}>
        <Navlinks navLinks={"/projects"} name={"projects"} />
      </li>
      <li className={styles.navLinks}>
        <Navlinks navLinks={"/contact"} name={"contact"} />
      </li>
    </div>
  );
}

export default HamburgerMenu;
