import Head from "next/head";

import ColorfulText from "../components/ColorfulText";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Image from "next/image";
import profileImage from "/public/images/profile.png";

export default function Home() {
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
      <div className="wrapper">
        <Header />
        <main>
          <section className="section-wrapper">
            <div className="intro-description">
              <p>
                <ColorfulText>
                  윤명희 소장은 인증된 정서중심치료 치료사이며 사람들의 감정을 깊이 이해하고, 이들을
                  진심으로 돌보는 전문가입니다. 미국 뉴햄프셔 주립대학교 대학원에서 가족치료 석사를
                  취득하며, 상담 분야에서의 탄탄한 학문적 기초를 마련했습니다. 이후 경성대학교
                  대학원에서 상담심리 박사 과정을 마쳤으며, 수년간 다양한 현장에서 실제적인 경험을
                  쌓아왔습니다. .
                </ColorfulText>
              </p>
            </div>
          </section>
          <section className="intro-wrapper">
            <div className="intro-title">
              <h2>윤명희 소장</h2>
            </div>
            <div className="intro-container">
              <Image src={profileImage} className="profile-image" alt="윤명희 프로필 사진" />
              <ColorfulText>
                <p>
                  <b>
                    "저는 상담을 통해 사람들의 내면 깊은 곳에 숨겨진 감정을 이해하고, 그들이
                    진정으로 원하는 변화를 이끌어내는 과정을 함께합니다.{" "}
                  </b>
                  관계에서의 갈등, 개인적인 상처, 혹은 삶의 어려움 속에서 우리는 종종 혼자서 그
                  무게를 감당하려 합니다. 하지만 저는 그 여정이 결코 혼자서 걸어야 할 길이 아니라고
                  믿습니다. 상담은 서로의 감정을 공감하고, 이해하며, 건강하게 소통하는 시작입니다.
                  제가 이끌어가는 공간에서, 당신은 자신의 감정을 안전하게 탐색하고, 그것을 어떻게
                  다룰 수 있을지 배워갈 것입니다. 함께 하는 시간 동안, 당신의 삶이 더 나은 방향으로
                  변화하길 진심으로 바랍니다."
                </p>
                <p>학력</p>
                <ul>
                  <li>동아대학교 가정관리학과 졸업</li>
                  <li>한양대학교 대학원 가정관리학과 가족학 전공 석사</li>
                  <li>미국 뉴햄프셔 주립대학교 대학원 가족치료 석사</li>
                  <li>경성대학교 대학원 상담심리 박사</li>
                </ul>
                <p>경력</p>
                <ul>
                  <li>전 부산가정법원 가사재판이혼상담위원</li>
                  <li>전 부산가정법원 협의이혼상담위원</li>
                  <li>전 부산 아동보호전문기관 상담위원</li>
                  <li>전 동부 아동보호전문기관 상담위원</li>
                  <li>전 부산여성의 전화 전문상담위원</li>
                  <li>전 동아대학교 강사</li>
                  <li>전 경성대학교 강사</li>
                  <li>전 양산시청 전문상담원</li>
                </ul>
                <p>번역서</p>
                <ul>
                  <li>
                    <a href="https://product.kyobobook.co.kr/detail/S000001643934" target="_blank">
                      정서중심치료 - 내담자가 자신의 감정을 다루도록 코칭하기 (Emotion-Focused
                      Therapy; Coaching clients to work through their feelings, Greenberg, 2015)
                    </a>
                  </li>
                  <li>
                    <a href="https://product.kyobobook.co.kr/detail/S000200460926" target="_blank">
                      범불안장애를 위한 정서중심치료 - 두 의자 대화와 빈 의자 대화를 중심으로
                      (Emotion-Focused Therapy for Generalized Anxiety, Watson & Greenberg, 2017)
                    </a>
                  </li>
                </ul>
                <p>주요논문</p>
                <ul>
                  <li>정서중심부부치료에서 회피형배우자 개입을 위한 과제분석</li>
                </ul>
                <p>자격증</p>
                <ul>
                  <li>교육상담전문가 1급</li>
                  <li>임상예술심리상담사 1급</li>
                  <li>부모교육코칭전문가 1급</li>
                </ul>
              </ColorfulText>
            </div>
          </section>
        </main>
        <Header isReverse={false} />
        <Footer />
      </div>
    </>
  );
}
