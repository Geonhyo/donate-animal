import Button from "@/component/common/button/button";
import styles from "./button.module.css";
import { RankModel } from "@/model/rank";

type Props = {
  data: RankModel;
};

export default function HomeButton({ data }: Props) {
  return (
    <div className={styles.main}>
      {data && (
        <p className={styles.text}>
          {data.id === "cat" ? "고양이" : "강아지"}가 이기고 있어요!
        </p>
      )}
      <Button style="white" href="/vote" title="누구를 응원하시겠습니까?">
        누구를 응원하시겠습니까?
      </Button>
    </div>
  );
}
