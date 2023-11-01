import Image from "next/image";
import styles from "./title.module.css";
import MainTitleImage from "@/public/image/main_title.png";

export default function HomeTitle() {
  return (
    <div className={styles.main}>
      <Image
        src={MainTitleImage}
        alt="댕냥이의 기부배틀"
        title="댕냥이의 기부배틀"
        fill
        priority
        sizes="400px"
      />
    </div>
  );
}
