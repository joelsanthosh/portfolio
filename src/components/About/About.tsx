import { getImageurl } from "../../Utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageurl("about/aboutImage.png")}
          alt="about-icon"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageurl("about/arrow.png")} />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a passionate and dedicated React.js Developer with
                experience building modern, interactive, and user-centric web
                applications. I specialize in creating seamless and dynamic user
                interfaces that are fast, responsive, and easy to use. With a
                focus on performance and best practices, I aim to build
                scalable, maintainable applications that provide a great user
                experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
