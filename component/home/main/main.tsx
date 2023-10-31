"use client";
import { useEffect, useState } from "react";
import styles from "./main.module.css";
import Image from "next/image";
import { RankModel } from "@/model/rank";
import CatImage from "@/public/image/cat.svg";
import DogImage from "@/public/image/dog.svg";

type Props = {
  data: RankModel[];
};

export default function HomeMain({ data }: Props) {
  const [catImageWidth, setCatImageWidth] = useState("150px");
  const [dogImageWidth, setDogImageWidth] = useState("150px");

  useEffect(() => {
    const dogNum = data.find((e) => e.id === "dog")?.voteNum ?? 1;
    const catNum = data.find((e) => e.id === "cat")?.voteNum ?? 1;
    setCatImageWidth(`calc(120px + 60px * ${catNum} / ${dogNum + catNum})`);
    setDogImageWidth(`calc(120px + 60px * ${dogNum} / ${dogNum + catNum})`);
  }, [data]);

  return (
    <div className={styles.main}>
      <div
        className={styles.imageDog}
        style={{
          width: dogImageWidth,
        }}
      >
        <Image src={DogImage} alt="강아지" fill priority sizes="l" />
      </div>
      <div
        className={styles.imageCat}
        style={{
          width: catImageWidth,
        }}
      >
        <Image src={CatImage} alt="고양이" fill priority sizes="l" />
      </div>
    </div>
  );
}
