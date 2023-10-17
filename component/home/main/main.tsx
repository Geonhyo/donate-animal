"use client";
import { useEffect, useState } from "react";
import styles from "./main.module.css";
import Image from "next/image";

type AnimalValueType = {
  id: "dog" | "cat";
  name: string;
  description: string;
};

const dogValue: AnimalValueType = {
  id: "dog",
  name: "강아지",
  description: "강아지가 이기고 있멍 :3",
};
const catValue: AnimalValueType = {
  id: "cat",
  name: "고양이",
  description: "고양이가 이기고 있묘 ^--^",
};

const nextAnimal = (id: "dog" | "cat"): AnimalValueType => {
  switch (id) {
    case "dog":
      return catValue;
    case "cat":
      return dogValue;
  }
};

const defaultImageWidth = "calc(100vw / 3)";
const activeImageWidth = "calc(100vw / 3 * 2)";

export default function HomeMain() {
  const [animal, setAnimal] = useState<AnimalValueType>(dogValue);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimal((animal) => nextAnimal(animal.id));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
        <span className={styles.titleName}>{animal.name}</span>가<br />
        세상을
        <br />
        지배한다!
      </h1>
      <p className={styles.description}>{animal.description}</p>
      <div className={styles.images}>
        <div
          className={styles.imageDog}
          style={{
            width: animal.id === "dog" ? activeImageWidth : defaultImageWidth,
          }}
        >
          <Image src={"/image/dog.png"} alt="강아지" fill priority sizes="l" />
        </div>
        <div
          className={styles.imageCat}
          style={{
            width: animal.id === "cat" ? activeImageWidth : defaultImageWidth,
          }}
        >
          <Image src={"/image/cat.png"} alt="고양이" fill priority sizes="l" />
        </div>
      </div>
    </div>
  );
}
