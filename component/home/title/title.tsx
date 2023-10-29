import Image from "next/image";
import styles from "./title.module.css";
import MainTitleImage from "@/public/image/main-title.svg";

export default function HomeTitle() {
  return (
    <div className={styles.main}>
      <Image
        src={MainTitleImage}
        alt="댕냥이의 기부배틀"
        title="댕냥이의 기부배틀"
        fill
      />
    </div>
  );
}
