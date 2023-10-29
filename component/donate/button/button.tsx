"use client";

import Button from "@/component/common/button/button";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./button.module.css";

export default function DonateButton() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const animal = searchParams.get("animal");
  const isElse = animal === "else";
  const onsubmitHandler = () => {
    if (isElse) {
      // Update VoteNum
      const id = "12ndkss";
      router.replace(`/result?id=${id}`);
    } else {
      router.replace(`/message?animal=${animal}`);
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.description}>
        <h3 className={styles.descriptionTitle}>반드시 확인해주세요!</h3>
        <p className={styles.descriptionContent}>
          • 개인 프로젝트로 기부금 영수증 발급이 어렵습니다.
          <br />• 투표완료 버튼을 누르기 전에 결제를 완료해주세요.
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
