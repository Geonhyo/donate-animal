import { DailyInfo } from "@/model/info";
import { db } from "@/service/firebase";
import {
  collection,
  getDocs,
  query,
  limit,
  orderBy,
  addDoc,
  serverTimestamp,
} from "firebase/firestore/lite";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const snapshot = await getDocs(
    query(collection(db, "daily"), orderBy("createdAt", "desc"), limit(1))
  );

  if (snapshot.empty)
    return NextResponse.json({
      day: 1,
      fund: 0,
      createdAt: new Date(),
    } as DailyInfo);

  const data = snapshot.docs.map((e) => e.data())[0];

  return NextResponse.json({
    day: data.day,
    fund: data.fund,
    createdAt: data.createdAt.toDate(),
  } as DailyInfo);
}

export type PostDailyRequestBody = {
  code: string;
  day: number;
  fund: number;
};

export async function POST(request: NextRequest) {
  const props = (await request.json()) as PostDailyRequestBody;
  await addDoc(collection(db, "daily"), {
    code: props.code,
    day: props.day,
    fund: props.fund,
    createdAt: serverTimestamp(),
  });
  return NextResponse.json(true);
}
