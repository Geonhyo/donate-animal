"use client";
import Image from "next/image";
import styles from "./pop-up.module.css";
import { useCallback, useEffect, useState } from "react";
import VoteIcon from "@/public/icon/vote.svg";

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export default function ResultPopUp() {
  const [on, setOn] = useState(true);

  const removePopUp = async () => {
    await sleep(1500);
    setOn(false);
  };

  useEffect(() => {
    removePopUp();
  }, []);

  const onClickBackground = () => {
    setOn(false);
  };

  return (
    on && (
      <div className={styles.background} onClick={onClickBackground}>
        <div className={styles.main}>
          <div className={styles.icon}>
            <Image src={VoteIcon} alt="투표완료" fill priority sizes="l" />
          </div>
          <p className={styles.num}>+1</p>
        </div>
      </div>
    )
  );
}
