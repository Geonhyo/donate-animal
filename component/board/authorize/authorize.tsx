import { useState } from "react";
import styles from "./authorize.module.css";
import Button from "@/component/common/button/button";
import { PostAuthorizeRequestBody } from "@/app/api/authorize/route";

type Props = {
  setAuthorized: (value: boolean) => void;
};

export default function BoardAuthorize({ setAuthorized }: Props) {
  const [code, setCode] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setError(false);
    setCode(e.currentTarget.value);
  };

  const onClickLogin = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/authorize`, {
        method: "POST",
        body: JSON.stringify({ code: code } as PostAuthorizeRequestBody),
      });

      const authorized = (await response.json()) as boolean;
      setAuthorized(authorized);
    } catch (e) {
      console.log(e);
      setError(true);
    } finally {
      setCode("");
    }
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>접근 코드를 입력해주세요</h1>
      <input
        type="password"
        placeholder="코드를 입력해주세요"
        className={styles.input}
        onChange={onChangeInput}
        value={code}
      />
      {error && <p className={styles.error}>잘못된 코드입니다</p>}
      <Button
        disabled={code === ""}
        className={styles.button}
        title="로그인"
        onClick={onClickLogin}
      >
        <p>로그인</p>
      </Button>
    </div>
  );
}
