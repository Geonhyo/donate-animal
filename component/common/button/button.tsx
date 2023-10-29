import Link from "next/link";
import styles from "./button.module.css";

type Props = {
  className?: string;
  children: React.ReactNode;
  title: string;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
  style?: "solid" | "ghost";
  replace?: boolean;
};

export default function Button({
  className,
  children,
  title,
  href,
  disabled = false,
  onClick,
  style = "solid",
  replace = true,
}: Props) {
  return disabled ? (
    <button
      disabled
      className={`${
        style === "solid" ? styles.solid : styles.ghost
      } ${className}`}
      title={title}
    >
      {children}
    </button>
  ) : href ? (
    <Link
      replace={replace}
      onClick={onClick}
      href={href}
      title={title}
      className={`${
        style === "solid" ? styles.solid : styles.ghost
      } ${className}`}
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={onClick}
      title={title}
      className={`${
        style === "solid" ? styles.solid : styles.ghost
      } ${className}`}
    >
      {children}
    </button>
  );
}
