"use client";
import Image from "next/image";
import styles from "./title.module.css";
import { useRouter } from "next/navigation";
import BackIcon from "@/public/icon/back.svg";

export default function MessageTitle() {
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
        <h1 className={styles.title}>응원의 한 마디 💌</h1>
        <div className={styles.back} />
      </div>
    </div>
  );
}
