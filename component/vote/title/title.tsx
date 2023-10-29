import styles from "./title.module.css";

export default function VoteTitle() {
  return (
    <div className={styles.main}>
      <h1>댕냥이의 한판승부 🥊</h1>
      <h2>
        세상을 지배할 귀여움은 누구?
        <br />
        팀을 선택한 뒤 기부로 투표해주세요!
      </h2>
    </div>
  );
}
