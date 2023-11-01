import { db } from "@/service/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore/lite";
import { NextRequest, NextResponse } from "next/server";

export type PostAuthorizeRequestBody = {
  code: string;
};

export async function POST(request: NextRequest) {
  const props = (await request.json()) as PostAuthorizeRequestBody;
  await addDoc(collection(db, "system"), {
    code: props.code,
    accessedAt: serverTimestamp(),
  });
  return NextResponse.json(true);
}
