import styles from "./title.module.css";

export default function DonateTitle() {
  return (
    <div className={styles.main}>
      <h1>기부로 투표해주세요 🗳️</h1>
      <h2>
        권장 기부 금액은 3000원 이상이며
        <br />
        유기동물보호소에 전액 전달 예정입니다!
      </h2>
    </div>
  );
}
