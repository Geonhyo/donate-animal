"use client";
import Image from "next/image";
import styles from "./pop-up.module.css";
import { useEffect, useState } from "react";
import VotePlusImage from "@/public/image/vote_plus.svg";

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
    window.history.replaceState({ ...window.history.state }, "/", "/result");
    removePopUp();
  }, []);

  const onClickBackground = () => {
    setOn(false);
  };

  return (
    on && (
      <div className={styles.background} onClick={onClickBackground}>
        <div className={styles.main}>
          <Image src={VotePlusImage} alt="투표완료" fill priority sizes="l" />
        </div>
      </div>
    )
  );
}
