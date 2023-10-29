import HomeButton from "@/component/home/button/button";
import styles from "./page.module.css";
import Button from "@/component/common/button/button";
import HomeMain from "@/component/home/main/main";
import HomeTitle from "@/component/home/title/title";
import { RankModel } from "@/model/rank";
import Image from "next/image";

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

// Get Current Vote Result
const getData = async (): Promise<RankModel[]> => {
  // await sleep(5000);
  return [
    { rank: 1, id: "dog", voteNum: 15 },
    { rank: 2, id: "cat", voteNum: 11 },
    { rank: 3, id: "else", voteNum: 4 },
  ];
};

export default async function Page() {
  const data = await getData();
  return (
    <main className={styles.main}>
      <HomeTitle />
      <HomeMain data={data} />
      <HomeButton />
    </main>
  );
}
