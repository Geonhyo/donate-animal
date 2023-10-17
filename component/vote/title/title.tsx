import styles from "./title.module.css";

export default function VoteTitle() {
  return (
    <div className={styles.main}>
      <h1>
        당신의 PICK을
        <br />
        선택해주세요!
      </h1>
      <p className={styles.description}>
        1회 투표 비용은 0000원이며
        <br />
        유기동물 보호소에 전액 기부됩니다.
      </p>
    </div>
  );
}
