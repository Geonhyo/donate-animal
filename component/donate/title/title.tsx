"use client";
import Image from "next/image";
import styles from "./title.module.css";
import HomeIcon from "@/public/icon/home.svg";
import Link from "next/link";

export default function DonateTitle() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.back} />
        <h1 className={styles.title}>기부로 응원해 주세요 💗</h1>
        <Link href={"/"} replace className={styles.back}>
          <Image src={HomeIcon} alt="홈으로" priority={false} fill sizes="s" />
        </Link>
      </div>
      <h2>
        권장 기부 금액은 3,000원 이상이며
        <br />
        유기 동물보호소에 전액 전달 예정입니다!
      </h2>
    </div>
  );
}
