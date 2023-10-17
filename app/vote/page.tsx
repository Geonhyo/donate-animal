import VoteTitle from "@/component/vote/title/title";
import styles from "./page.module.css";
import VoteMain from "@/component/vote/main/main";

export default function Page() {
  return (
    <main className={styles.main}>
      <VoteTitle />
      <VoteMain />
    </main>
  );
}
