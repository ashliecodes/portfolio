import styles from "./navbar.module.scss";
import Navlinks from "./Navlinks";
import { FaBars } from "react-icons/fa";
import { useWindowSize } from "../../hooks/useWindowSize";

function Navbar() {
  const windowSize = useWindowSize();
  console.log(windowSize);
  return (
    <div className={styles.container}>
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
          <div className={styles.hamburger}>
            <FaBars />
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
