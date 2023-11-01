"use client";
import Image from "next/image";
import styles from "./title.module.css";
import BackIcon from "@/public/icon/back.svg";
import Link from "next/link";

export default function VoteTitle() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Link href={"/"} replace className={styles.back}>
          <Image
            src={BackIcon}
            alt="뒤로가기"
            priority={false}
            fill
            sizes="s"
          />
        </Link>
        <h1 className={styles.title}>댕냥이의 기부배틀 🥊</h1>
        <div className={styles.back} />
      </div>
      <h2>
        세상을 지배할 귀여움은 누구?
        <br />
        팀을 선택한 뒤 기부로 응원해 주세요!
      </h2>
    </div>
  );
}
