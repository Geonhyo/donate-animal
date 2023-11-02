import ResultRank from "@/component/result/rank/rank";
import ResultPopUp from "@/component/result/pop-up/pop-up";
import { GetVoteResponseData } from "@/app/api/vote/route";

const getData = async (): Promise<GetVoteResponseData> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API}/vote`;
    const response = await fetch(url, {
      method: "GET",
      cache: "no-cache",
    });
    const result = (await response.json()) as GetVoteResponseData;
    return result;
  } catch (e) {
    console.log(e);
    throw Error();
  }
};

export default async function Page() {
  const data = await getData();
  return <ResultRank data={data.ranks} />;
}
