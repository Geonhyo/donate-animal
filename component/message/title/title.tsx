import styles from "./title.module.css";

export default function MessageTitle() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>응원의 한 마디 💌</h1>
      <h2 className={styles.subtitle}>
        우리팀을 응원해주세요!
        <br />
        전시장에서 내 응원을 확인할 수 있어요.
        <br />
        <span className={styles.description}>
          (투표 완료 후 전시 화면을 확인해주세요!)
        </span>
      </h2>
    </div>
  );
}
