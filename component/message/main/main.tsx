"use client";
import Image from "next/image";
import styles from "./main.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import DogImage from "@/public/image/dog.png";
import CatImage from "@/public/image/cat.png";
import Button from "@/component/common/button/button";
import { useState } from "react";

export default function MessageMain() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const animal = searchParams.get("animal");
  const [message, setMessage] = useState("");
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    setMessage(value);
  };

  const onSubmitWithoutMessage = () => {
    // Update VoteNum
    const id = "sfasdfvv";
    router.push(`/result?id=${id}`);
  };

  const onSubmitMessage = () => {
    console.log(message);
    // Upload Message and Update VoteNum
    const id = "sdfsdfsd";
    router.push(`/result?id=${id}`);
  };

  return (
    <>
      <div className={styles.image}>
        <Image
          src={animal === "dog" ? DogImage : CatImage}
          alt={animal ?? "dog"}
          fill
          priority
          sizes="l"
        />
      </div>
      <div className={styles.textareaBackground}>
        <textarea
          className={styles.textarea}
          onChange={onChangeHandler}
          value={message}
        />
      </div>
      <div className={styles.button}>
        <Button
          onClick={onSubmitWithoutMessage}
          title="응원 건너뛰기"
          style="ghost"
        >
          건너뛰고 바로 투표 완료하기
        </Button>
        <Button onClick={onSubmitMessage} title="응원하기" disabled={!message}>
          응원과 함께 투표 완료하기
        </Button>
      </div>
    </>
  );
}
