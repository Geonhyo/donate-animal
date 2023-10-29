import { RankModel } from "@/model/rank";
import ResultRank from "@/component/result/rank/rank";
import Animal from "@/model/animal";
import ResultPopUp from "@/component/result/pop-up/pop-up";

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

type Response = {
  voted: boolean;
  vote?: {
    votedAt: Date;
    animal: Animal;
    message?: string;
  };
  ranks: RankModel[];
};

const getData = async (): Promise<Response> => {
  await sleep(3000);
  return {
    voted: true,
    vote: {
      votedAt: new Date(2023, 10, 30),
      animal: "dog",
      message: "댕댕이 세상 만세",
    },
    ranks: [
      { rank: 1, id: "dog", voteNum: 665 },
      { rank: 2, id: "cat", voteNum: 11 },
      { rank: 3, id: "else", voteNum: 4 },
    ],
  };
};

export default async function Page() {
  const data = await getData();
  return (
    <>
      <ResultRank data={data.ranks} />
      {data.voted && <ResultPopUp />}
    </>
  );
}
