import ResultHeader from "@/component/result/header/header";
import styles from "./page.module.css";
import ResultMain from "@/component/result/content/content";
import { RankModel } from "@/model/rank";
import ResultRank from "@/component/result/rank/rank";

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

const getData = async (): Promise<RankModel[]> => {
  // await sleep(5000);
  return [
    { rank: 1, id: "dog", voteNum: 15 },
    { rank: 2, id: "cat", voteNum: 11 },
    { rank: 3, id: "raccoon", voteNum: 4 },
  ];
};

export default async function Page() {
  const data = await getData();
  return <ResultRank data={data} />;
}
