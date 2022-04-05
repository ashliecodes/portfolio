import styles from "./navbar.module.scss";
import Navlinks from "./Navlinks";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useState } from "react";

function Navbar() {
  const windowSize = useWindowSize();
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar(!sidebar);
  }
  console.log(sidebar);

  return (
    <div className={styles.container}>
      {/* <section className={sidebar ? "nav-menu active" : "nav-menu"}> */}
      <nav className={styles.nav}>
        <h1 className={styles.logo}>
          <Navlinks navLinks={"/"} name={"ashliecodes"} />
        </h1>
        {windowSize.width > 730 ? (
          <div className={styles.navContainer}>
            <Navlinks navLinks={"/about"} name={"about"} />
            <Navlinks navLinks={"/projects"} name={"projects"} />
            <Navlinks navLinks={"/contact"} name={"contact"} />
          </div>
        ) : (
          <div className={sidebar ? styles.displaySidebar : styles.hideSidebar}>
            {!sidebar ? (
              <FaBars className={styles.hamburger} onClick={showSidebar} />
            ) : (
              <ImCross className={styles.hamburger} onClick={showSidebar} />
            )}
          </div>
        )}
      </nav>
      {/* </section> */}
    </div>
  );
}

export default Navbar;
