import React from "react";
import Navlinks from "./Navlinks";
import styles from "../styles/hamburger.module.css";

function HamburgerMenu({ toggleNav }) {
  return (
    <div className={styles.hideHamburger}>
      <div
        className={styles.hamburgerMenu}
        style={{ height: toggleNav ? "91%" : "0%" }}
      >
        <ul
          className={styles.hamburgerUl}
          style={{ display: toggleNav ? "flex" : "none" }}
        >
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
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;
