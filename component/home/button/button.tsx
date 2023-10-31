import Button from "@/component/common/button/button";
import styles from "./button.module.css";

export default function HomeButton() {
  return (
    <Button
      className={styles.main}
      style="white"
      href="/vote"
      title="누구를 응원하시겠습니까?"
    >
      누구를 응원하시겠습니까?
    </Button>
  );
}
