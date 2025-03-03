import AuroraFull from "@/components/AuroraFull";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

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
    <>
      <Head>
        <title>오로라 심리상담 연구소 - 양산, 부산 심리상담소</title>
        <meta name="description" content="양산, 부산 정서중심 상담 심리상담소소" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&family=Noto+Serif+KR:wght@200..900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
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
    </>
  );
}
