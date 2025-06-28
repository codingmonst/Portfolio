import firstSection from "../../constants/skillsFirst";
import thirdSection from "../../constants/skillsThird";
import secondSectionOne from "../../constants/skillsSecondOne";
import secondSectionTwo from "../../constants/skillSectionTwo";

import styles from "./skills.module.scss";

export default function Skills() {
  return (
    <div className={styles.skillsSection}>
      <div className={styles.skillsTechnologiesBlock}>
        <div className={styles.lineSkills} />
        <span>
          Skills and technologies
        </span>
        <div className={styles.lineSkills} />
      </div>
      <div className={styles.skillsContainer}>
        <div className={styles.firstSection}>
          <h1 className="">PROGRAMMING LANGUAGES</h1>
          <div className={styles.line} />
          {firstSection.map((e, index) => {
            return (
              <div className={styles.section} key={index}>
                <p>{e}</p>
                <div className={styles.line} />
              </div>
            );
          })}
        </div>
        <div className={styles.secondSection}>
          <div className={styles.secondOne}>
            <div>
              <h1>DATABASE SYSTEMS</h1>
              {secondSectionOne.map((e, index) => {
                return <p key={index}>{e}</p>;
              })}
            </div>
            <div>
              <h1>Web Services/Web API</h1>
              {secondSectionTwo.map((e, index) => {
                return <p key={index}>{e}</p>;
              })}
            </div>
          </div>
          <div className={styles.skillsLine} />
        </div>
        <div className={styles.firstSection}>
          <h1>WEB DEVELOPMENT FRAMEWORKS</h1>
          <div className={styles.line} />
          {thirdSection.map((e, index) => {
            return (
              <div className={styles.section} key={index}>
                <p>{e}</p>
                <div className={styles.line} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
