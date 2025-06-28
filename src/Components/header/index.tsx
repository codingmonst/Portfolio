import { useState, useEffect, useRef } from "react";
import PrimaryButton from "../../shared/primaryButton";
import downloadIcon from "../../images/downloadIcon.svg";
import HamburgerMenu from "../hamburgerMenu";
import Button from "../button";

import styles from "./header.module.scss";

export default function Header(): JSX.Element {
  const [activeHamburger, setActiveHamburger] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);

  const openHamburger = (): void => {
    setActiveHamburger(!activeHamburger);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent): void => {
      if (
        !activeHamburger &&
        ref.current &&
        !ref.current.contains(e.target as HTMLElement)
      ) {
        setActiveHamburger(!activeHamburger);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [activeHamburger]);

  return (
    <div className={styles.header} ref={ref}>
      <div className={styles.headerSection}>
        <span>
          Sergey Ghazaryan
          <br />
          Portfolio
        </span>
        <div className={styles.hamburgerMenuBox} onClick={openHamburger}>
          <HamburgerMenu active={activeHamburger} />
        </div>
        <div
          className={`${!activeHamburger && styles.openHeaderNavbar} ${
            styles.headerNavbar
          }`}
        >
          <div className={styles.buttonsSection}>
            <PrimaryButton
              text="Contact Me"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${process.env.REACT_APP_EMAIL_ADDRESS}`}
            />
            <div className="downloadBtn">
              <a href={"/files/Sergey_CV.pdf"} download="Sergey_Ghazaryan_CV">
                <Button className={styles.headerButton}>
                  Download CV <img alt="" src={downloadIcon} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
