import { RankModel } from "@/model/rank";
import styles from "./rank.module.css";
import Image from "next/image";
import ResultTitleImage from "@/public/image/result_title.png";
import DogImage from "@/public/image/dog.png";
import CatImage from "@/public/image/cat.png";
import ElseImage from "@/public/image/else.png";

type Props = {
  data: RankModel[];
};

export default function ResultRank({ data }: Props) {
  const mostVoteNum = data.find((e) => e.rank === 1)?.voteNum;
  return (
    <div className={styles.background}>
      <div className={styles.main}>
        <p className={styles.title}>
          <Image
            src={ResultTitleImage}
            alt="응원 현황"
            fill
            priority={false}
            sizes="50vw"
          />
        </p>
        <ul className={styles.list}>
          {data.map((rank) => (
            <RankItem
              key={rank.id}
              mostVoteNum={mostVoteNum ?? rank.voteNum}
              rank={rank}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

type ItemProps = {
  mostVoteNum: number;
  rank: RankModel;
};

function RankItem({ mostVoteNum, rank }: ItemProps) {
  const barWidth = (170 * rank.voteNum) / (mostVoteNum < 1 ? 1 : mostVoteNum);
  const getSvg = () => {
    switch (rank.id) {
      case "dog":
        return DogImage;
      case "cat":
        return CatImage;
      default:
        return ElseImage;
    }
  };

  const getBgColor = () => {
    switch (rank.rank) {
      case 1:
        return "var(--primary-green)";
      case 2:
        return "var(--secondary-green)";
      default:
        return "var(--rgb-gray)";
    }
  };
  return (
    <div className={styles.item}>
      <div className={styles.itemImage}>
        <Image src={getSvg()} alt={rank.id} fill priority sizes="48px" />
      </div>
      <div
        style={{ width: `${30 + barWidth}px`, backgroundColor: getBgColor() }}
        className={styles.itemBar}
      />
      <p className={styles.itemNum}>{rank.voteNum}♡</p>
    </div>
  );
}
