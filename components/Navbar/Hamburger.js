import React from "react";
import Navlinks from "./Navlinks";
import styles from "./navbar.module.scss";

function HamburgerMenu({ navLinks, name }) {
  return (
    <div>
      <li className={styles.navLinks}>
        <Navlinks navLinks={"/about"} name={"about"} />
      </li>

      <br />
      <li className={styles.navLinks}>
        <Navlinks navLinks={"/projects"} name={"projects"} />
      </li>
      <br />
      <li className={styles.navLinks}>
        <Navlinks navLinks={"/contact"} name={"contact"} />
      </li>
    </div>
  );
}

export default HamburgerMenu;
