"use client";
import Image from "next/image";
import styles from "./title.module.css";
import BackIcon from "@/public/icon/back.svg";
import { useRouter } from "next/navigation";

export default function DonateTitle() {
  const router = useRouter();
  const onClickBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.back();
  };
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <button onClick={onClickBack} className={styles.back}>
          <Image
            src={BackIcon}
            alt="뒤로가기"
            priority={false}
            fill
            sizes="s"
          />
        </button>
        <h1 className={styles.title}>기부로 응원해 주세요 💗</h1>
        <div className={styles.back} />
      </div>
      <h2>
        권장 기부 금액은 3000원 이상이며
        <br />
        유기동물보호소에 전액 전달 예정입니다!
      </h2>
    </div>
  );
}
