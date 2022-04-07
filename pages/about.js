import styles from "../styles/about.module.scss";
import Image from "next/image";
import portfolioPic from "../images/portfolioPic.jpg";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          <h2 className={styles.aboutTitle}>
            <span className={styles.hamTags}>&lt;</span>about
            <span className={styles.hamTags}>/&gt;</span>
          </h2>
          <p className={styles.aboutDescription}>
            Hi there, my name is Ashlie! After working in the legal industry as
            a legal assistant, I decided that law wasn&apos;t for me. I felt
            unstimulated and became underwhelmed quickly. I am fun and creative
            (at least I like to think so), so I wanted something that matched
            this - something that challendged me whilst also being fun and
            creative.
            <br />
            <br />
            Software development struck that balance for me!
            <br />
            <br />I did the Code First Girls Introduction into Web Development
            course and Introduction into Python Programming course which was my
            first taste of coding and I wanted more - greedy I know! This led me
            to join the School of Code where I was selected from 1800
            applicants, trained full-time for 16-weeks in order to finally
            kickstart my long awaited career in software development.
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
      </div>
    </div>
  );
}

export default About;
