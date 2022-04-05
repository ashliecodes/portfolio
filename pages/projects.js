import styles from "../styles/projects.module.scss";
import Image from "next/image";
import raduno from "../images/raduno.png";
import hackerplanner from "../images/hackerplanner.png";
import portfolio from "../images/portfolio.png";

function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.projectTitle}>
        <h2 className={styles.projectTitle}>projects:</h2>
        <section className={styles.grid}>
          {/* PORTFOLIO */}
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                src={portfolio}
                height="250px"
                width="390px"
                alt="a picture of ashlie"
              />
            </div>
            <p className={styles.projDesc}>
              I used Next.js for my portfolio as I wanted to learn and practice
              a new framework to develop my skills.
            </p>
            <button className={styles.btn}>
              <a
                href="https://ashliecodes.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                demo
              </a>
            </button>
            <button className={styles.btn}>
              <a
                href="https://github.com/ashliecodes/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                see code
              </a>
            </button>
          </div>
          {/* HACKAPLANNER PROJECT */}
          <div className={styles.card}>
            <h2 className={styles.title}>Hackaplanner:</h2>
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                src={hackerplanner}
                height="300px"
                width="390px"
                alt="a picture of ashlie"
              />
            </div>
            <p className={styles.projDesc}>
              A planning app that helps you plan weekly hackathons at the School
              of Code stay organised.
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
            <h2 className={styles.title}>Raduno!: </h2>

            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                src={raduno}
                height="300px"
                width="390px"
                alt="a picture of ashlie"
              />
            </div>
            <p className={styles.projDesc}>
              An event planning app which allows you to catch up without the
              fuss.
            </p>
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
        </section>
      </div>
    </div>
  );
}

export default Projects;
