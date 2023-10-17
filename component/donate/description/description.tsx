import styles from "./description.module.css";

export default function DonateDescription() {
  return (
    <>
      <h3 className={styles.title}>반드시 확인해주세요!</h3>
      <p className={styles.description}>
        • 개인 프로젝트로 기부금 영수증 발급이 어렵습니다.
        <br />• 투표완료 버튼을 누르기 전에 결제를 완료해주세요.
      </p>
    </>
  );
}
