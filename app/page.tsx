import styles from "./page.module.css";
import Button from "@/component/common/button/button";
import HomeMain from "@/component/home/main/main";

export default function Page() {
  return (
    <main className={styles.main}>
      <HomeMain />
      <Button href="/vote" title="당신의 PICK은?">
        당신의 PICK은?
      </Button>
    </main>
  );
}
