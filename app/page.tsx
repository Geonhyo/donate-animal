import HomeButton from "@/component/home/button/button";
import styles from "./page.module.css";
import HomeMain from "@/component/home/main/main";
import HomeTitle from "@/component/home/title/title";
import { RankModel } from "@/model/rank";
import { GetVoteResponseData } from "@/app/api/vote/route";

// Get Current Vote Result
const getData = async (): Promise<RankModel[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/vote`, {
      method: "GET",
      cache: "no-cache",
    });
    const result = (await response.json()) as GetVoteResponseData;
    return result.ranks;
  } catch (e) {
    console.log(e);
    return [
      { id: "cat", rank: 0, voteNum: 1 },
      { id: "dog", rank: 0, voteNum: 1 },
    ] as RankModel[];
  }
};

export default async function Page() {
  const data = await getData();
  return (
    <main className={styles.main}>
      <HomeTitle />
      <HomeMain data={data} />
      <HomeButton data={data[0]} />
    </main>
  );
}
