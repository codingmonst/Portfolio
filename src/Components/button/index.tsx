import { ButtonProps } from "./contract";

import styles from "./button.module.scss";

export default function Button({ onClick, className, children }: ButtonProps) {
  return (
    <button className={`${styles.buttonStyle} ${className ?? ''}`} onClick={onClick}>
      {children}
    </button>
  );
}
