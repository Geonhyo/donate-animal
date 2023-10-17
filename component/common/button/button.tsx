import Link from "next/link";
import styles from "./button.module.css";

type Props = {
  children: React.ReactNode;
  title: string;
  href: string;
  disabled?: boolean;
};

export default function Button({
  children,
  title,
  href,
  disabled = false,
}: Props) {
  return disabled ? (
    <button disabled className={styles.main} title={title}>
      {children}
    </button>
  ) : (
    <Link href={href} title={title} className={styles.main}>
      {children}
    </Link>
  );
}
