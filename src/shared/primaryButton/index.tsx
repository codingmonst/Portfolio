import openInNewTab from "./openinnewtab/openInNewTab";

import styles from  "./PrimaryButton.module.scss";

interface ButtonProps {
  text?: string;
  href: string;
}

const PrimaryButton = ({ text, href }: ButtonProps) => {
  return (
    <button
      className={styles.primaryButton}
      onClick={() => {
        openInNewTab(href);
      }}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
