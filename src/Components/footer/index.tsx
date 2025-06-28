import styles from "./footer.module.scss";

export default function Footer(): JSX.Element {
  return (
    <div className={styles.footer}>
      <div className={styles.footerSection}>
        <p>© 2025. All rights reserved.</p>
      </div>
    </div>
  );
}
