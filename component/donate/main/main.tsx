import styles from "./main.module.css";
import Link from "next/link";
import KakaoPayIcon from "@/public/icon/kakao-pay.svg";
import Image from "next/image";

const paymentLink = "https://qr.kakaopay.com/Ej8GGJlqS";

export default function DonateMain() {
  return (
    <div className={styles.main}>
      <div className={styles.linkMain}>
        <Link
          href={paymentLink}
          className={styles.linkButton}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className={styles.linkButtonImage}>
            <Image src={KakaoPayIcon} alt="카카오페이 결제하기" fill />
          </div>
        </Link>
        <p className={styles.linkDescription}>카카오 페이 바로가기</p>
        <p className={styles.linkContent}>
          버튼을 눌러 카카오 페이로 이동한 뒤<br />
          기부금을 송금해 주세요.
        </p>
      </div>
      <div className={styles.accountMain}>
        <p className={styles.accountNumber}>카카오뱅크 3333-20-8054264</p>
        <p className={styles.accountContent}>
          카카오 페이 송금이 불가한 경우
          <br />위 계좌번호로 직접 송금해 주세요.
        </p>
      </div>
    </div>
  );
}
