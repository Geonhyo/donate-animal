import styles from "./link.module.css";
import Link from "next/link";

const paymentLink = "https://qr.kakaopay.com/Ej8GGJlqS";

export default function DonateLink() {
  return (
    <div className={styles.main}>
      <p className={styles.title}>[링크로 결제하기]</p>
      <Link
        href={paymentLink}
        className={styles.button}
        rel="noopener noreferrer"
        target="_blank"
      >
        카카오 페이로 바로가기
      </Link>
      <p className={styles.content}>
        ❶ 버튼을 눌러 카카오 페이로 이동한다.
        <br />❷ 카카오 페이로 0000원을 송금한다.
      </p>
    </div>
  );
}
