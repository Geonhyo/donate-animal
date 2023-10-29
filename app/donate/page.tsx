import styles from "./page.module.css";
import DonateMain from "@/component/donate/main/main";
import DonateButton from "@/component/donate/button/button";
import DonateTitle from "@/component/donate/title/title";

export default function Page() {
  return (
    <main className={styles.main}>
      <DonateTitle />
      <DonateMain />
      <DonateButton />
    </main>
  );
}
