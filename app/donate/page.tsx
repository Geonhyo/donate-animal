import styles from "./page.module.css";
import DonateQr from "@/component/donate/qr/qr";
import DonateLink from "@/component/donate/link/link";
import DonateDescription from "@/component/donate/description/description";
import DonateButton from "@/component/donate/button/button";
import DonateTitle from "@/component/donate/title/title";

export default function Page() {
  return (
    <main className={styles.main}>
      <DonateTitle />
      <DonateQr />
      <DonateLink />
      <DonateDescription />
      <DonateButton />
    </main>
  );
}
