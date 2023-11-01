"use client";
import Image from "next/image";
import styles from "./title.module.css";
import BackIcon from "@/public/icon/back.svg";
import Link from "next/link";

export default function MessageTitle() {
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
        <h1 className={styles.title}>응원의 한 마디 💌</h1>
        <div className={styles.back} />
      </div>
    </div>
  );
}
