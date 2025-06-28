import arrowImg from "../../images/arrow.svg";

import styles from "./about.module.scss";

export default function About():JSX.Element {
  return (
    <div className={styles.about}>
      <div className={styles.aboutSection}>
        <div className={styles.developerSection}>
          <div className={styles.fullStackBlock}>
            <div className={styles.blockLeftSection}>
              <span>FULL</span>
              <div className={styles.line} />
            </div>
            <span className={styles.stackSpan}>STACK</span>
          </div>
          <div className={styles.developerTextBlock}>
            <div className={styles.developerBlock}>
              <p>DEVELOPER</p>
            </div>
            <div className={styles.textSection}>
              <img src={arrowImg} alt="" className={styles.smallArrow} />
              <p>
                Passionate and skilled Full-Stack Developer offering 6 years of
                relevant experience and a proven track record of success in
                achieving extraordinary results. With a strong attention to
                detail and accuracy and the important ability to function well
                in a team setting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
