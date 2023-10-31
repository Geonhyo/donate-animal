import { RankModel } from "@/model/rank";
import { db } from "@/service/firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  updateDoc,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore/lite";
import { getCount } from "firebase/firestore/lite";
import { NextRequest, NextResponse } from "next/server";

export type PostVoteRequestBody = {
  animal: "dog" | "cat" | "else";
  message?: string;
};

export async function POST(request: NextRequest) {
  const props = (await request.json()) as PostVoteRequestBody;
  const snapshot = await addDoc(collection(db, "votes"), {
    ...props,
    read: false,
    createdAt: serverTimestamp(),
  });

  return Response.json(snapshot.id);
}

export type GetVoteResponseData = {
  voted: boolean;
  vote?: {
    votedAt: Date;
    animal: "dog" | "cat" | "else";
    message?: string;
  };
  ranks: RankModel[];
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  let voteSnap;
  let voteInfo;
  let catVoteNum;
  let dogVoteNum;
  let elseVoteNum;

  await Promise.all([
    (voteSnap = id && (await getDoc(doc(db, "votes", id)))),
    (catVoteNum = (
      await getCount(
        query(collection(db, "votes"), where("animal", "==", "cat"))
      )
    ).data().count),
    (dogVoteNum = (
      await getCount(
        query(collection(db, "votes"), where("animal", "==", "dog"))
      )
    ).data().count),
    (elseVoteNum = (
      await getCount(
        query(collection(db, "votes"), where("animal", "==", "else"))
      )
    ).data().count),
  ]);

  const rankList = [
    { id: "cat", rank: 0, voteNum: catVoteNum },
    { id: "dog", rank: 0, voteNum: dogVoteNum },
    { id: "else", rank: 0, voteNum: elseVoteNum },
  ] as RankModel[];

  if (voteSnap && voteSnap.exists()) {
    voteInfo = voteSnap.data();
    updateDoc(doc(db, "votes", voteSnap.id), { read: true });
  }

  rankList.sort((a, b) => a.voteNum - b.voteNum);
  rankList[0].rank = 1;
  rankList[1].rank = 2;
  rankList[2].rank = 3;

  const data = {
    voted: (voteInfo && !voteInfo.read) ?? false,
    vote: voteInfo && {
      votedAt: voteInfo.createdAt.toDate(),
      animal: voteInfo.animal as "dog" | "cat" | "else",
      message: voteInfo.message ?? undefined,
    },
    ranks: rankList,
  } as GetVoteResponseData;

  return NextResponse.json(data);
}
