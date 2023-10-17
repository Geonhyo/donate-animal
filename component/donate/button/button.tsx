"use client";

import Button from "@/component/common/button/button";
import { useSearchParams } from "next/navigation";

export default function DonateButton() {
  const searchParams = useSearchParams();
  const animal = searchParams.get("animal");
  return (
    <Button href={`/result?animal=${animal}`} title="확인 후 투표 완료하기">
      확인 후 투표 완료하기
    </Button>
  );
}
