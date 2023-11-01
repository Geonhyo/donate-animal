"use client";
import Image from "next/image";
import styles from "./main.module.css";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/component/common/button/button";
import { PostVoteRequestBody } from "@/app/api/vote/route";
import DogImage from "@/public/image/dog.png";
import CatImage from "@/public/image/cat.png";
import BubbleLeftImage from "@/public/image/bubble_left.png";
import BubbleRightImage from "@/public/image/bubble_right.png";

export default function MessageMain() {
  const searchParams = useSearchParams();
  const animal = searchParams.get("animal");

  useEffect(() => {
    window.history.replaceState({ ...window.history.state }, "/", "/");
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
      <h2 className={styles.subtitle}>
        <span>{animal === "dog" ? "댕댕이" : "냥냥이"}</span>를 위한 한 마디를
        남겨주세요!
        <br />
        전시장에서 내 응원을 확인할 수 있어요.
        <br />
        <span className={styles.description}>
          (응원 완료 후 전시 화면을 확인해 주세요!)
        </span>
      </h2>
      <div className={styles.image}>
        <Image
          src={animal === "dog" ? DogImage : CatImage}
          alt={animal ?? "dog"}
          fill
          priority
          sizes="320px"
        />
      </div>
      <div className={styles.textareaBackground}>
        <Image
          src={animal === "dog" ? BubbleLeftImage : BubbleRightImage}
          alt=""
          fill
          priority
          sizes="320px"
        />
        <div className={styles.textBox}>
          <textarea
            className={styles.textarea}
            onChange={onChangeHandler}
            value={message}
          />
        </div>
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
