"use client";
import { useRouter } from "next/navigation";
import styles from "./button.module.css";
import Button from "@/component/common/button/button";

export default function ResultButton() {
  const router = useRouter();
  return (
    <Button
      className={styles.button}
      title="첫 화면으로 돌아가기"
      onClick={router.back}
    >
      ⌂ 첫 화면으로 돌아가기
    </Button>
  );
}
