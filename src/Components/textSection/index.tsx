import styles from "./textSection.module.scss";

export default function TextSection(props) {
  return (
    <div className={styles.textSection}>
      <div className={styles.line} />
      <div className={styles.imageSection}>
        <img src={props.image} alt="" />
      </div>
      <div className={styles.line} />
    </div>
  );
}
