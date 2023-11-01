"use client";
import BoardAuthorize from "@/component/board/authorize/authorize";
import styles from "./page.module.css";

import { useState } from "react";
import BoardMain from "@/component/board/main/main";

export default function Page() {
  const [authorized, setAuthorized] = useState(false);
  return (
    <div className={styles.main}>
      {authorized && <BoardMain />}
      {!authorized && <BoardAuthorize setAuthorized={setAuthorized} />}
    </div>
  );
}
