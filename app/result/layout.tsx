import ResultHeader from "@/component/result/header/header";
import styles from "./layout.module.css";
import ResultContent from "@/component/result/content/content";
import Button from "@/component/common/button/button";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className={styles.main}>
      <ResultHeader />
      {children}
      <ResultContent />
      <Button href="/" title="첫 화면으로">
        ⌂ 첫 화면으로
      </Button>
    </main>
  );
}
