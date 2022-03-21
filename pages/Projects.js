import React from "react";

function Projects() {
  return (
    <div>
      <h1>Projects</h1>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Studio Ghibli App &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://hackaplanner.netlify.app" className={styles.card}>
          <h2>Hackaplanner &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a href="https://raduno-plans.netlify.app" className={styles.card}>
          <h2>Raduno! &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>
      </div>
    </div>
  );
}

export default Projects;
