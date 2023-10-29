import { RankModel } from "@/model/rank";
import styles from "./rank.module.css";
import Image from "next/image";

type Props = {
  data: RankModel[];
};

export default function ResultRank({ data }: Props) {
  const mostVoteNum = data.find((e) => e.rank === 1)?.voteNum;
  return (
    <div className={styles.background}>
      <div className={styles.main}>
        <p className={styles.title}>투표 현황</p>
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
  const barWidth = (160 * rank.voteNum) / mostVoteNum;
  return (
    <div className={styles.item}>
      <div className={styles.itemImage}>
        <Image
          src={`/image/${rank.id}.png`}
          alt={rank.id}
          fill
          priority
          sizes="m"
        />
      </div>
      <div style={{ width: `${10 + barWidth}px` }} className={styles.itemBar} />
      <p className={styles.itemNum}>{rank.voteNum}표</p>
    </div>
  );
}
