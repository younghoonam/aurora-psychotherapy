import AuroraFull from "@/components/AuroraFull";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const router = useRouter();
  const textRef = useRef();

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const hideTexts = () => {
    textRef.current.classList.toggle("fade-out");
    console.log(textRef.current.classList);
  };

  return (
    <div className={`inquired-canvas ${fadeIn ? "fade-in" : ""}`} onClick={hideTexts}>
      <div ref={textRef} className="inquired-text-wrapper">
        <h1 className="inquired-text">문의가 접수되었습니다</h1>
        <p className="inquired-subtext">
          보내신 문의내용은 입력하신 이메일로 확인하실 수 있습니다. 빠른 시일 내에 답변을 드리도록
          하겠습니다.
        </p>
        <button
          className="back-button"
          onClick={() => {
            router.push("/");
          }}
        >
          ← 홈으로 돌아가기
        </button>
      </div>

      <AuroraFull />
    </div>
  );
}
