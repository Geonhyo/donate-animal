"use client";
import Image from "next/image";
import styles from "./title.module.css";
import BackIcon from "@/public/icon/back.svg";
import { useRouter } from "next/navigation";

export default function VoteTitle() {
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
