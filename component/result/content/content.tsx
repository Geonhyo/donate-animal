"use client";
import styles from "./content.module.css";
import InstagramIcon from "@/public/icon/instagram.svg";
import UrlIcon from "@/public/icon/url.svg";
import Image from "next/image";
import Link from "next/link";

const instagramLink =
  "https://instagram.com/we.ruletheworld?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr";
const url = "localhost:3000";

export default function ResultContent() {
  const onClickCopyUrl = () => {
    navigator.clipboard.writeText(url);
    alert("URL이 복사되었습니다");
  };

  return (
    <div className={styles.main}>
      <Link
        href={instagramLink}
        rel="noopener noreferrer"
        target="_blank"
        className={styles.button}
      >
        <div className={styles.buttonImage}>
          <Image src={InstagramIcon} alt="인스타그램" fill priority />
        </div>
        <p className={styles.buttonLabel}>
          더 많은 소식
          <br />
          확인하기
        </p>
      </Link>
      <button onClick={onClickCopyUrl} className={styles.button}>
        <div className={styles.buttonImage}>
          <Image src={UrlIcon} alt="URL 공유" fill priority />
        </div>
        <p className={styles.buttonLabel}>
          친구에게
          <br />
          투표 홍보하기
        </p>
      </button>
    </div>
  );
}
