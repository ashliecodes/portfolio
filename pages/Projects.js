import React from "react";
import styles from "../styles/projects.module.scss";

function Projects() {
  return (
    <div className={styles.container}>
      <h1>Projects</h1>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Studio Ghibli App &rarr;</h2>
          <p>
            I used an API to create an app that allows you to search for your
            favourite Studio Ghibli movies.
          </p>
          <button>
            <a href="" target="_blank" rel="noreferrer">
              demo
            </a>
          </button>
        </div>

        <div className={styles.card}>
          <h2>Hackaplanner &rarr;</h2>
          <p>A planning app that helps you stay organised</p>

          <button>
            <a
              href="https://hackaplanner.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              demo
            </a>
          </button>
        </div>

        <div className={styles.card}>
          <h2>Raduno! &rarr;</h2>
          <p>An event creating app</p>
          <button>
            <a
              href="https://raduno-plans.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              demo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
