import Link from "next/link";
import styles from "./button.module.css";

type Props = {
  className?: string;
  children: React.ReactNode;
  title: string;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
  style?: "solid" | "ghost" | "white";
};

export default function Button({
  className,
  children,
  title,
  href,
  disabled = false,
  onClick,
  style = "solid",
}: Props) {
  const getStyle = () => {
    switch (style) {
      case "solid":
        return styles.solid;
      case "ghost":
        return styles.ghost;
      case "white":
        return styles.white;
    }
  };
  return disabled ? (
    <button disabled className={`${getStyle()} ${className}`} title={title}>
      {children}
    </button>
  ) : href ? (
    <Link
      onClick={onClick}
      href={href}
      title={title}
      className={`${getStyle()} ${className}`}
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
