"use client";
import Image from "next/image";
import styles from "./main.module.css";
import { useSearchParams, useRouter } from "next/navigation";
import DogImage from "@/public/image/dog.png";
import CatImage from "@/public/image/cat.png";
import Button from "@/component/common/button/button";
import { useEffect, useState } from "react";
import { PostVoteRequestBody } from "@/app/api/vote/route";

export default function MessageMain() {
  const searchParams = useSearchParams();
  const animal = searchParams.get("animal");

  useEffect(() => {
    window.history.replaceState(null, "/", "/");
  }, []);

  const router = useRouter();
  const [message, setMessage] = useState("");
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    setMessage(value);
  };

  const onSubmitWithoutMessage = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/vote`, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({ animal: animal } as PostVoteRequestBody),
    });
    const id = await response.json();
    router.replace(`/result?id=${id}`);
  };

  const onSubmitMessage = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/vote`, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({
        animal: animal,
        message: message,
      } as PostVoteRequestBody),
    });
    const id = await response.json();
    router.replace(`/result?id=${id}`);
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
