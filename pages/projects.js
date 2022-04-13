import styles from "../styles/projects.module.scss";
import Image from "next/image";
import raduno from "../images/raduno.png";
import hackerplanner from "../images/hackerplanner.png";
import portfolio from "../images/portfolio.png";
import studioghibliapp from "../images/studioghibliapp.png";

function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          <h2 className={styles.projectTitle}>
            <span className={styles.hamTags}>&lt;</span>projects
            <span className={styles.hamTags}>/&gt;</span>
          </h2>
          <section className={styles.grid}>
            {/* PORTFOLIO */}
            <div className={styles.card}>
              <h2 className={styles.title}>My portfolio:</h2>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.img}
                  src={portfolio}
                  height="250px"
                  width="390px"
                  alt="a picture of my portfolio"
                />
              </div>
              <p className={styles.projDesc}>
                I used Next.js for my portfolio as I wanted to learn and
                practice a new framework to develop my skills.
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

            {/* RADUNO PROJECT */}
            <div className={styles.card}>
              <h2 className={styles.title}>Raduno!: </h2>

              <div className={styles.imgContainer}>
                <Image
                  className={styles.img}
                  src={raduno}
                  height="300px"
                  width="390px"
                  alt="a picture of the raduno project"
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
                  href="https://github.com/ashliecodes/final-project-front-end-hexcode"
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
                  width="500px"
                  alt="a picture of the hackerplanner project"
                />
              </div>
              <p className={styles.projDesc}>
                A planning app that helps you plan weekly hackathons at the
                School of Code stay organised.
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
                  href="https://github.com/ashliecodes/national-project-week-coding-cats"
                  target="_blank"
                  rel="noreferrer"
                >
                  see code
                </a>
              </button>
            </div>

            {/* SUDIO GHIBLI PROJECT */}
            <div className={styles.card}>
              <h2 className={styles.title}>Studio Ghibli movie finder:</h2>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.img}
                  src={studioghibliapp}
                  height="250px"
                  width="390px"
                  alt="studio ghibli app"
                />
              </div>
              <p className={styles.projDesc}>
                An app that uses an API to find your favourite Studio Ghibli
                movies!
              </p>

              <button className={styles.btn}>
                <a
                  href="https://studio-ghibli-movie-finder.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  demo
                </a>
              </button>

              <button className={styles.btn}>
                <a
                  href="https://github.com/ashliecodes/studio-ghibli-app/tree/main/studio-ghibli-app"
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
    </div>
  );
}

export default Projects;
