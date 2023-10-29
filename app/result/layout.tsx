import styles from "./layout.module.css";
// import ResultContent from "@/component/result/content/content";
// import ResultTitle from "@/component/result/title/title";
// import ResultButton from "@/component/result/button/button";
import dynamic from "next/dynamic";

const ResultContent = dynamic(
  () => import("@/component/result/content/content")
);
const ResultTitle = dynamic(() => import("@/component/result/title/title"));
const ResultButton = dynamic(() => import("@/component/result/button/button"));

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className={styles.main}>
      <ResultTitle />
      {children}
      <ResultContent />
      <ResultButton />
    </main>
  );
}
