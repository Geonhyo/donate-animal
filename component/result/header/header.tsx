"use client";
import { useSearchParams } from "next/navigation";
import styles from "./header.module.css";
import Image from "next/image";

type AnimalValueType = {
  title: string;
  src: string;
};

const value = {
  dog: {
    title: "감사하멍 :3",
    src: "/image/dog.png",
  } as AnimalValueType,
  cat: {
    title: "감사하묘 ^--^",
    src: "/image/cat.png",
  } as AnimalValueType,
  raccoon: {
    title: "감사하뵤 ‘ㅅ'",
    src: "/image/raccoon.png",
  } as AnimalValueType,
};

export default function ResultHeader() {
  const searchParams = useSearchParams();
  const animal = searchParams.get("animal") as "dog" | "cat" | "raccoon";
  const animalValue = value[animal];

  return (
    <>
      <h1>{animalValue.title}</h1>
      <div title={animalValue.title} className={styles.image}>
        <Image src={animalValue.src} alt={animal} fill priority />
      </div>
    </>
  );
}
