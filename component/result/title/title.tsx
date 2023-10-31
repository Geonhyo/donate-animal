"use client";
import Image from "next/image";
import styles from "./title.module.css";
import { useRouter } from "next/navigation";
import BackIcon from "@/public/icon/back.svg";

export default function ResultTitle() {
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
        <h1 className={styles.title}>감사합니다!</h1>
        <div className={styles.back} />
      </div>
      <h2>
        당신의 응원으로
        <br />
        세상이 조금 더 귀여워졌어요.
      </h2>
    </div>
  );
}
