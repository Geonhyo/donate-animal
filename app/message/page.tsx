import MessageTitle from "@/component/message/title/title";
import styles from "./page.module.css";
import MessageMain from "@/component/message/main/main";

export default function Page() {
  return (
    <main className={styles.main}>
      <MessageTitle />
      <MessageMain />
    </main>
  );
}
