import Image from "next/image";
import styles from "./qr.module.css";

export default function DonateQr() {
  return (
    <div className={styles.main}>
      <p className={styles.title}>[QR로 결제하기]</p>
      <div className={styles.image}>
        <Image src={"/image/qr-code.png"} alt="QR Code" fill priority />
      </div>
      <p className={styles.content}>
        ❶ 핸드폰으로 QR코드를 인식한다.
        <br />❷ 카카오 페이로 0000원을 송금한다.
      </p>
    </div>
  );
}
