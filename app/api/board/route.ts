import { MessageInfo } from "@/model/message";
import { db } from "@/service/firebase";
import {
  collection,
  getDocs,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore/lite";
import { NextRequest, NextResponse } from "next/server";

type GetNewMessageProps = {
  animal: "cat" | "dog";
  lastCreatedAt: Date;
};

const getNewMessages = async ({
  animal,
  lastCreatedAt,
}: GetNewMessageProps): Promise<MessageInfo[]> => {
  const lastTime = new Date(lastCreatedAt);
  const snapshot = await getDocs(
    query(
      collection(db, "votes"),
      where("animal", "==", animal),
      where("hasMessage", "==", true),
      orderBy("createdAt", "asc"),
      startAfter(lastTime)
    )
  );

  if (snapshot.empty) return [];
  const result = snapshot.docs.map(
    (e) =>
      ({
        message: e.data().message ?? "",
        createdAt: e.data().createdAt.toDate(),
      } as MessageInfo)
  );
  return result;
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const dogLastCreatedAtParams = searchParams.get("dogLastCreatedAt");
  const catLastCreatedAtParams = searchParams.get("catLastCreatedAt");
  if (dogLastCreatedAtParams === null || catLastCreatedAtParams === null) {
    throw Error();
  }
  const dogLastCreatedAt = new Date(dogLastCreatedAtParams);
  const catLastCreatedAt = new Date(catLastCreatedAtParams);

  let catMessages = [] as MessageInfo[];
  let dogMessages = [] as MessageInfo[];

  await Promise.all([
    (catMessages = await getNewMessages({
      animal: "cat",
      lastCreatedAt: catLastCreatedAt,
    })),
    (dogMessages = await getNewMessages({
      animal: "dog",
      lastCreatedAt: dogLastCreatedAt,
    })),
  ]);

  return NextResponse.json({
    dogMessages: dogMessages,
    catMessages: catMessages,
  });
}
