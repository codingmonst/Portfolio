import openInNewTab from "../../shared/primaryButton/openinnewtab/openInNewTab";
import arrowDown from "../../images/arrowDown.svg";
import { urls } from "../../constants/social-links";
import Button from "../button";

import styles from "./contact.module.scss";

export default function Contact(): JSX.Element {
  return (
    <div className={styles.contact}>
      <div className={styles.textSection}>
        <div className={styles.line} />
        Interested? contact me!
        <div className={styles.line} />
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.contacts}>
          <div className={styles.findMeSection}>
            <span>Find me here</span>
            <img alt="" src={arrowDown} />
          </div>
          <div className={styles.contactButtons}>
            {urls?.map((url, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => {
                    openInNewTab(url.link);
                  }}
                  className={styles.contactButton}
                >
                  {url.platform}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
