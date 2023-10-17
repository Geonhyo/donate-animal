import styles from "./content.module.css";

export default function ResultContent() {
  return (
    <div className={styles.main}>
      <p className={styles.content}>
        앞으로 올라올 프로젝트 새소식은
        <br />
        인스타그램에서 확인해주세요!
      </p>
      <p className={styles.username}>@000000</p>
    </div>
  );
}
