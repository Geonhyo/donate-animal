import styles from "./main.module.css";
import Image from "next/image";
import DogImage from "@/public/image/dog.png";
import CatImage from "@/public/image/cat.png";
import { useEffect, useState } from "react";
import { MessageInfo } from "@/model/message";
import BubbleLeftImage from "@/public/image/bubble_left.png";
import BubbleRightImage from "@/public/image/bubble_right.png";
import { DailyInfo } from "@/model/info";

type GetNewMessageProps = {
  catLastCreatedAt: Date;
  dogLastCreatedAt: Date;
};

type GetNewMessageResult = {
  dogMessages: MessageInfo[];
  catMessages: MessageInfo[];
};

const getMessages = async ({
  catLastCreatedAt,
  dogLastCreatedAt,
}: GetNewMessageProps): Promise<GetNewMessageResult> => {
  try {
    const url = `${
      process.env.NEXT_PUBLIC_API
    }/board?catLastCreatedAt=${catLastCreatedAt.toString()}&dogLastCreatedAt=${dogLastCreatedAt.toString()}`;
    const response = await fetch(url, { method: "GET", cache: "no-cache" });
    const result = (await response.json()) as GetNewMessageResult;
    return result;
  } catch (e) {
    return { dogMessages: [], catMessages: [] };
  }
};

export default function BoardMain() {
  const [dailyInfo, setDailyInfo] = useState({ day: 1, fund: 0 } as DailyInfo);
  const [dogShowMessages, setDogShowMessages] = useState([] as MessageInfo[]);
  const [catShowMessages, setCatShowMessages] = useState([] as MessageInfo[]);

  useEffect(() => {
    getDailyInfo();

    async function getDailyInfo() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/daily`, {
          method: "GET",
          cache: "no-cache",
        });

        const data = (await response.json()) as DailyInfo;
        setDailyInfo(data);
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  useEffect(() => {
    const dogMessages = [] as MessageInfo[];
    const catMessages = [] as MessageInfo[];

    let dogLastCreatedAt = new Date();
    let catLastCreatedAt = new Date();

    fetching();

    const polling = setInterval(fetching, 30000);
    return () => clearInterval(polling);

    async function fetching() {
      const newMessages = await getMessages({
        catLastCreatedAt: catLastCreatedAt,
        dogLastCreatedAt: dogLastCreatedAt,
      });

      if (newMessages.dogMessages.length > 0) {
        const newDogMessages = newMessages.dogMessages.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getDate()
        );
        dogMessages.push(...newDogMessages);
        const lastDog = newDogMessages.pop();
        if (lastDog) {
          dogLastCreatedAt = lastDog.createdAt;
        }
      }

      if (newMessages.catMessages.length > 0) {
        const newCatMessages = newMessages.catMessages.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getDate()
        );
        catMessages.push(...newCatMessages);
        const lastCat = newCatMessages.pop();
        if (lastCat) {
          catLastCreatedAt = lastCat.createdAt;
        }
      }

      const newDogShowMessages = dogMessages.splice(
        0,
        Math.min(3, dogMessages.length)
      );
      setDogShowMessages(newDogShowMessages);

      const newCatShowMessages = catMessages.splice(
        0,
        Math.min(3, catMessages.length)
      );
      setCatShowMessages(newCatShowMessages);
    }
  }, []);

  const onDeleteBubble = (animal: "cat" | "dog", num: number) => {
    if (animal === "cat") {
      setCatShowMessages((prev) => prev.splice(num - 1, 1));
      return;
    }
    if (animal === "dog") {
      setDogShowMessages((prev) => prev.splice(num - 1, 1));
      return;
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.dog}>
        <div className={styles.dogImage}>
          <Image src={DogImage} alt="댕댕이" fill priority sizes="50vw" />
        </div>
        {dogShowMessages[0] && (
          <Bubble
            onDeleteBubble={() => onDeleteBubble("dog", 1)}
            animal="dog"
            num={1}
            message={dogShowMessages[0]}
          />
        )}
        {dogShowMessages[1] && (
          <Bubble
            onDeleteBubble={() => onDeleteBubble("dog", 2)}
            animal="dog"
            num={2}
            message={dogShowMessages[1]}
          />
        )}
        {dogShowMessages[2] && (
          <Bubble
            onDeleteBubble={() => onDeleteBubble("dog", 3)}
            animal="dog"
            num={3}
            message={dogShowMessages[2]}
          />
        )}
      </div>
      <div className={styles.cat}>
        <div className={styles.catImage}>
          <Image src={CatImage} alt="냥냥이" fill priority sizes="50vw" />
        </div>
        {catShowMessages[0] && (
          <Bubble
            onDeleteBubble={() => onDeleteBubble("cat", 1)}
            animal="cat"
            num={1}
            message={catShowMessages[0]}
          />
        )}
        {catShowMessages[1] && (
          <Bubble
            onDeleteBubble={() => onDeleteBubble("cat", 2)}
            animal="cat"
            num={2}
            message={catShowMessages[1]}
          />
        )}
        {catShowMessages[2] && (
          <Bubble
            onDeleteBubble={() => onDeleteBubble("cat", 3)}
            animal="cat"
            num={3}
            message={catShowMessages[2]}
          />
        )}
      </div>
      <div className={styles.dailyInfo}>
        <h1 className={styles.dailyInfoText}>
          {dailyInfo.day}일 차 누적 기부금: {dailyInfo.fund}원
        </h1>
      </div>
    </div>
  );
}

type BubbleProps = {
  animal: "dog" | "cat";
  num: 1 | 2 | 3;
  message: MessageInfo;
  onDeleteBubble: () => void;
};

function Bubble({ animal, num, message, onDeleteBubble }: BubbleProps) {
  const getBubbleStyle = () => {
    switch (animal) {
      case "dog":
        switch (num) {
          case 1:
            return styles.dogBubble1;
          case 2:
            return styles.dogBubble2;
          case 3:
            return styles.dogBubble3;
        }
      case "cat":
        switch (num) {
          case 1:
            return styles.catBubble1;
          case 2:
            return styles.catBubble2;
          case 3:
            return styles.catBubble3;
        }
    }
  };

  const onClickBubble = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onDeleteBubble();
  };

  return (
    <div className={getBubbleStyle()} onClick={onClickBubble}>
      <Image
        src={animal === "dog" ? BubbleLeftImage : BubbleRightImage}
        alt="bubble"
        fill
        priority
        sizes="400px"
      />
      <div className={styles.bubbleContainer} />
      <div className={styles.bubbleText}>{message.message}</div>
    </div>
  );
}
