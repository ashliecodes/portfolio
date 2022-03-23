import styles from "../styles/about.module.scss";
import Image from "next/image";
import portfolioPic from "../images/portfolioPic.jpg";

function About() {
  return (
    <div className={styles.container}>
      <h1> about:</h1>
      <p className={styles.about}>
        Hi there, my name is Ashlie! After working in the legal industry as a
        legal assistant, I decided that law wasn&apos;t for me. I felt
        unstimulated and became underwhelmed quickly.
      </p>
      <br />
      <p className={styles.about}>
        I am fun and creative (at least I like to think so), so I wanted
        something that matched this - something that challendged me whilst also
        being fun and creative.
      </p>
      <br />
      <p className={styles.about}>
        Software development struck that balance for me!
      </p>
      <br />
      <p className={styles.about}>
        I did the Code First Girls Introduction into Web Development course and
        Introduction into Python Programming course which was my first taste of
        coding and I wanted more... (greedy, I know)!
      </p>
      <br />
      <p className={styles.about}>
        This led me to join the School of Code where I spent the last couple
        months on the bootcamp learning to code in order to finally kickstart my
        long awaited career in software development.
      </p>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src={portfolioPic}
          height="300px"
          width="310px"
          alt="a picture of ashlie"
        />
      </div>
    </div>
  );
}

export default About;
