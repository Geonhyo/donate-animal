"use client";
import Image from "next/image";
import styles from "./title.module.css";
import HomeIcon from "@/public/icon/home.svg";
import Link from "next/link";

export default function MessageTitle() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.back} />
        <h1 className={styles.title}>응원의 한 마디 💌</h1>
        <Link href={"/"} replace className={styles.back}>
          <Image src={HomeIcon} alt="홈으로" priority={false} fill sizes="s" />
        </Link>
      </div>
    </div>
  );
}
