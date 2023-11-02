"use client";
import Image from "next/image";
import styles from "./title.module.css";
import HomeIcon from "@/public/icon/home.svg";
import Link from "next/link";

export default function ResultTitle() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.back} />
        <h1 className={styles.title}>감사합니다!</h1>
        <Link href={"/"} replace className={styles.back}>
          <Image src={HomeIcon} alt="홈으로" priority={false} fill sizes="s" />
        </Link>
      </div>
      <h2>
        당신의 응원으로
        <br />
        세상이 조금 더 귀여워졌어요.
      </h2>
    </div>
  );
}
