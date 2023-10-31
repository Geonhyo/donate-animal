import ResultRank from "@/component/result/rank/rank";
import ResultPopUp from "@/component/result/pop-up/pop-up";
import { GetVoteResponseData } from "@/app/api/vote/route";

const getData = async (id?: string): Promise<GetVoteResponseData> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API}/vote${id ? `?id=${id}` : ""}`;
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

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const id = searchParams.id?.toString();
  const data = await getData(id);
  return (
    <>
      <ResultRank data={data.ranks} />
      {data.voted && <ResultPopUp />}
    </>
  );
}
