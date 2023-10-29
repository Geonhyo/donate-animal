import styles from "./title.module.css";

export default function ResultTitle() {
  return (
    <div className={styles.main}>
      <h1>감사합니다!</h1>
      <h2>
        당신의 소중한 한 표로
        <br />
        세상이 조금 더 귀여워졌어요.
      </h2>
    </div>
  );
}
