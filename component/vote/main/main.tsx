"use client";

import Image from "next/image";
import styles from "./main.module.css";
import { useEffect, useState } from "react";
import Button from "@/component/common/button/button";
import Animal from "@/model/animal";
import DogImage from "@/public/image/dog.svg";
import DogSelectedImage from "@/public/image/dog_selected.svg";
import CatImage from "@/public/image/cat.svg";
import CatSelectedImage from "@/public/image/cat_selected.svg";
import ElseImage from "@/public/image/else.svg";
import ElseSelectedImage from "@/public/image/else_selected.svg";

export default function VoteMain() {
  useEffect(() => {
    window.history.replaceState({ ...window.history.state }, "/", "/");
  }, []);
  const [selected, setSelected] = useState<Animal | null>(null);
  return (
    <>
      <PickItem
        title="TEAM 댕댕"
        defaultSrc={DogImage}
        selectedSrc={DogSelectedImage}
        label="TEAM 댕댕"
        onClick={() => setSelected("dog")}
        isSelected={selected === "dog"}
      />
      <PickItem
        title="TEAM 냥냥"
        defaultSrc={CatImage}
        selectedSrc={CatSelectedImage}
        label="TEAM 냥냥"
        onClick={() => setSelected("cat")}
        isSelected={selected === "cat"}
      />
      <PickItem
        title="이기는 팀 우리팀 🕶️🍿"
        defaultSrc={ElseImage}
        selectedSrc={ElseSelectedImage}
        label="이기는 팀 우리팀 🕶️🍿"
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
  defaultSrc: string;
  selectedSrc: string;
  label: string;
  onClick: () => void;
  isSelected: boolean;
};

function PickItem({
  title,
  defaultSrc,
  selectedSrc,
  label,
  onClick,
  isSelected,
}: ItemProps) {
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick();
  };
  return (
    <button title={title} onClick={onClickHandler} className={styles.item}>
      <div className={styles.itemImage}>
        <Image
          src={isSelected ? selectedSrc : defaultSrc}
          alt={title}
          fill
          priority={false}
          sizes="m"
        />
      </div>
      <p className={styles.itemLabel}>{label}</p>
    </button>
  );
}
