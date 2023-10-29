import Button from "@/component/common/button/button";
import styles from "./button.module.css";

export default function HomeButton() {
  return (
    <Button
      replace={false}
      className={styles.main}
      href="/vote"
      title="누구에게 투표하시겠습니까?"
    >
      누구에게 투표하시겠습니까?
    </Button>
  );
}
