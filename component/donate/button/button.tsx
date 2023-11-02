"use client";

import Button from "@/component/common/button/button";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./button.module.css";
import { PostVoteRequestBody } from "@/app/api/vote/route";
import { useEffect } from "react";

export default function DonateButton() {
  const searchParams = useSearchParams();
  const animal = searchParams.get("animal");
  useEffect(() => {
    window.history.replaceState({ ...window.history.state }, "/", "/");
  }, []);
  const router = useRouter();
  const isElse = animal === "else";
  const onsubmitHandler = async () => {
    if (isElse) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/vote`, {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify({ animal: animal } as PostVoteRequestBody),
      });
      const id = await response.json();
      router.replace(`/result?id=${id}`);
    } else {
      router.replace(`/message?animal=${animal}`);
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.description}>
        <h3 className={styles.descriptionTitle}>반드시 확인해 주세요!</h3>
        <p className={styles.descriptionContent}>
          1. 개인 프로젝트로 기부금 영수증 발급이 어렵습니다.
          <br />
          2. 다음으로 넘어가기 전에 기부를 진행해 주세요.
        </p>
      </div>
      <Button
        className={styles.button}
        onClick={onsubmitHandler}
        title={isElse ? "투표 완료하기" : "다음으로"}
      >
        {isElse ? "투표 완료하기" : "다음으로"}
      </Button>
    </div>
  );
}
