
import styles from "./Contact.module.css";
import { getImageurl } from "../../Utils";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageurl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:joelsanthoshraja96@gmail.com">joelsanthoshraja96@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageurl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/joel-santhosh-raja-2710a6149/">linkedin.com/joelsanthoshraja</a>
        </li>
        <li className={styles.link}>
          <img src={getImageurl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/joelsanthosh">github.com/joelsanthosh</a>
        </li>
      </ul>
    </footer>
  );
};