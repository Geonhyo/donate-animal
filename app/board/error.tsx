"use client";
import styles from "./error.module.css";

export default function Error() {
  return (
    <div className={styles.main}>
      <h1 className={styles.message}>충분한 너비의 기기에서 접속해주세요</h1>
    </div>
  );
}
