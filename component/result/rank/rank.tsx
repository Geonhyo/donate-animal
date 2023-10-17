import { RankModel } from "@/model/rank";
import styles from "./rank.module.css";
import Image from "next/image";

type Props = {
  data: RankModel[];
};

export default function ResultRank({ data }: Props) {
  return (
    <div className={styles.main}>
      <p className={styles.title}>[투표 현황]</p>
      <ul className={styles.list}>
        {data.map((rank) => (
          <RankItem key={rank.id} rank={rank} />
        ))}
      </ul>
    </div>
  );
}

type ItemProps = {
  rank: RankModel;
};

function RankItem({ rank }: ItemProps) {
  return (
    <div className={rank.rank === 1 ? styles.itemFirst : styles.item}>
      <div className={styles.itemImage}>
        <Image
          src={`/image/${rank.id}.png`}
          alt={rank.id}
          fill
          priority
          sizes="m"
        />
      </div>
      <p className={styles.itemDescription}>
        {rank.rank === 1 && <span>현재&nbsp;</span>}
        {rank.rank}위
      </p>
    </div>
  );
}
