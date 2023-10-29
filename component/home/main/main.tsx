"use client";
import { useEffect, useState } from "react";
import styles from "./main.module.css";
import Image from "next/image";
import { RankModel } from "@/model/rank";

type Props = {
  data: RankModel[];
};

export default function HomeMain({ data }: Props) {
  const [catImageWidth, setCatImageWidth] = useState("calc(100vw / 2)");
  const [dogImageWidth, setDogImageWidth] = useState("calc(100vw / 2)");

  useEffect(() => {
    const dogNum = data.find((e) => e.id === "dog")?.voteNum ?? 0;
    const catNum = data.find((e) => e.id === "dog")?.voteNum ?? 0;
    setCatImageWidth(`calc(100vw * ${catNum} / ${dogNum + catNum})`);
    setDogImageWidth(`calc(100vw * ${dogNum} / ${dogNum + catNum})`);
  }, [data]);

  return (
    <div className={styles.main}>
      <div
        className={styles.imageDog}
        style={{
          width: dogImageWidth,
        }}
      >
        <Image src={"/image/dog.png"} alt="강아지" fill priority sizes="l" />
      </div>
      <div
        className={styles.imageCat}
        style={{
          width: catImageWidth,
        }}
      >
        <Image src={"/image/cat.png"} alt="고양이" fill priority sizes="l" />
      </div>
    </div>
  );
}
