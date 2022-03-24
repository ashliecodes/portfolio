import styles from "../styles/projects.module.scss";
import Image from "next/image";
import raduno from "../images/raduno.png";

function Projects() {
  return (
    <div className={styles.container}>
      <h1>Projects</h1>

      <div className={styles.grid}>
        {/* STUDIO GHIBLI PROJECT */}
        <div className={styles.card}>
          <h2 className={styles.title}>Studio Ghibli App </h2>
          <p className={styles.projDesc}>
            I used an API to create an app that allows you to search for your
            favourite Studio Ghibli movies.
          </p>
          <button className={styles.btn}>
            <a href="" target="_blank" rel="noreferrer">
              demo
            </a>
          </button>
        </div>
        {/* HACKAPLANNER PROJECT */}
        <div className={styles.card}>
          <h2 className={styles.title}>Hackaplanner</h2>
          <p className={styles.projDesc}>
            A planning app that helps you stay organised
          </p>

          <button className={styles.btn}>
            <a
              href="https://hackaplanner.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              demo
            </a>
          </button>

          <button className={styles.btn}>
            <a
              href="https://github.com/SchoolOfCode/national-project-week-coding-cats"
              target="_blank"
              rel="noreferrer"
            >
              see code
            </a>
          </button>
        </div>
        {/* RADUNO PROJECT */}
        <div className={styles.card}>
          <h2 className={styles.title}>Raduno! </h2>
          <p className={styles.projDesc}>An event creating app</p>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={raduno}
              height="300px"
              width="390px"
              alt="a picture of ashlie"
            />
          </div>

          <button className={styles.btn}>
            <a
              href="https://raduno-plans.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              demo
            </a>
          </button>

          <button className={styles.btn}>
            <a
              href="https://github.com/SchoolOfCode/final-project-front-end-hexcode"
              target="_blank"
              rel="noreferrer"
            >
              see code
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
