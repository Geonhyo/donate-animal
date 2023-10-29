"use client";

import Image from "next/image";
import styles from "./main.module.css";
import { useState } from "react";
import Button from "@/component/common/button/button";
import Animal from "@/model/animal";

export default function VoteMain() {
  const [selected, setSelected] = useState<Animal | null>(null);
  return (
    <>
      <PickItem
        title="TEAM 댕댕"
        src="/image/dog.png"
        description="TEAM 댕댕"
        onClick={() => setSelected("dog")}
        isSelected={selected === "dog"}
      />
      <PickItem
        title="TEAM 냥냥"
        src="/image/cat.png"
        description="TEAM 냥냥"
        onClick={() => setSelected("cat")}
        isSelected={selected === "cat"}
      />
      <PickItem
        title="이기는 팀 우리팀 🕶️🍿"
        src="/image/else.png"
        description="이기는 팀 우리팀 🕶️🍿"
        onClick={() => setSelected("else")}
        isSelected={selected === "else"}
      />
      <Button
        className={styles.button}
        href={`/donate?animal=${selected}`}
        title="다음으로"
        disabled={selected === null}
      >
        다음으로
      </Button>
    </>
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
