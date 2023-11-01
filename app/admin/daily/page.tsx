"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { PostDailyRequestBody } from "../../api/daily/route";
import { useRouter } from "next/navigation";
import Button from "@/component/common/button/button";

export default function Page() {
  const router = useRouter();
  const [day, setDay] = useState<number | null>(null);
  const [fund, setFund] = useState<number | null>(null);
  const [code, setCode] = useState<string>("");
  const onChangeDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDay(parseInt(e.currentTarget.value));
  };
  const onChangeFund = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFund(parseInt(e.currentTarget.value));
  };

  const onChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCode(e.currentTarget.value);
  };

  const onClickSubmit = async () => {
    if (!day || !fund || !code) return;
    try {
      const data = { day: day, fund: fund, code: code } as PostDailyRequestBody;
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/daily`, {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify(data),
      });
      const success = (await response.json()) as boolean;
      if (!success) throw Error;
      router.replace("/board");
    } catch (e) {
      console.log(e);
    } finally {
      setCode("");
    }
  };
  return (
    <main className={styles.main}>
      <h1>적립금 업데이트</h1>
      <p>누적 일자 (일)</p>
      <input
        className={styles.input}
        placeholder="누적 일자를 입력해주세요"
        type="number"
        onChange={onChangeDay}
      />
      <p>누적 적립금 (원)</p>
      <input
        className={styles.input}
        placeholder="누적 적립금을 입력해주세요"
        type="number"
        onChange={onChangeFund}
      />
      <p>확인 코드</p>
      <input
        className={styles.input}
        placeholder="확인코드를 입력해주세요"
        type="password"
        onChange={onChangeCode}
      />
      <Button
        title="완료"
        onClick={onClickSubmit}
        disabled={!day || !fund || !code}
      >
        완료
      </Button>
    </main>
  );
}
