import Image from "next/image";
import styles from "./layout.module.css";
import MainTitleImage from "@/public/image/main_title.png";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.main}>
      <div className={styles.mainTitle}>
        <Image
          src={MainTitleImage}
          alt="우리가 세상을 지배한다"
          fill
          priority
          sizes="400px"
        />
      </div>
      {children}
    </main>
  );
}
