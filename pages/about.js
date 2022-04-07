import styles from "../styles/about.module.scss";
import Image from "next/image";
import museum from "../images/museum.jpg";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          <h2 className={styles.aboutTitle}>
            <span className={styles.hamTags}>&lt;</span>about
            <span className={styles.hamTags}>/&gt;</span>
          </h2>
          <div className={styles.wrapper}>
            <text className={styles.aboutDescription}>
              After working in the legal industry as a legal assistant, I
              decided that law wasn&apos;t for me. I felt very unstimulated and
              underwhelmed. I am fun and creative (at least I like to think so).
              I searched far and wide for something that allowed me to express
              this side of myself which was hidden away for so long - something
              that challenged me whilst also being fun and creative... Software
              development allowed me to do just that!
              <br />
              <br />I did the Code First Girls Introduction into Web Development
              course and Introduction into Python Programming course which was
              my first taste of coding and I wanted more (greedy I know!). This
              led me to join the School of Code where I was selected from 1800
              applicants to train full-time for 16-weeks in order to finally
              kickstart my long awaited career in software development.
            </text>
            <br />
            <br />
            <div className={styles.imgContainer}>
              <Image
                className={styles.aboutImg}
                src={museum}
                height="383px"
                width="289px"
                alt="a picture of ashlie"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
