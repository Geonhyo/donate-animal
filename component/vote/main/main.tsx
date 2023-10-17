"use client";

import Image from "next/image";
import styles from "./main.module.css";
import { useState } from "react";
import Button from "@/component/common/button/button";

export default function VoteMain() {
  const [selected, setSelected] = useState<"dog" | "cat" | "raccoon" | null>(
    null
  );
  return (
    <div className={styles.main}>
      <ul className={styles.list}>
        <PickItem
          title="강아지한테 투표하기"
          src="/image/dog.png"
          description="강아지가 세상을 지배한다!"
          onClick={() => setSelected("dog")}
          isSelected={selected === "dog"}
        />
        <PickItem
          title="고양이한테 투표하기"
          src="/image/cat.png"
          description="고양이가 세상을 지배한다!"
          onClick={() => setSelected("cat")}
          isSelected={selected === "cat"}
        />
        <PickItem
          title="공정하게 한 표씩"
          src="/image/raccoon.png"
          description="이기는 팀 우리팀 🕶️🍿"
          onClick={() => setSelected("raccoon")}
          isSelected={selected === "raccoon"}
        />
      </ul>
      <Button
        href={`/donate?animal=${selected}`}
        title="투표 계속하기"
        disabled={selected === null}
      >
        투표 계속하기
      </Button>
    </div>
  );
}

type ItemProps = {
  title: string;
  src: string;
  description: string;
  onClick: () => void;
  isSelected: boolean;
};

function PickItem({ title, src, description, onClick, isSelected }: ItemProps) {
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick();
  };
  return (
    <button title={title} onClick={onClickHandler} className={styles.item}>
      <div className={styles.itemImage}>
        {isSelected && <div className={styles.itemImageCover} />}
        <Image src={src} alt={title} fill priority sizes="m" />
      </div>
      <p className={styles.itemDescription}>{description}</p>
    </button>
  );
}
