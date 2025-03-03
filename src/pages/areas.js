import Head from "next/head";

import ColorfulText from "../components/ColorfulText";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Aurora from "@/components/Aurora";

export default function Home() {
  return (
    <>
      <Head>
        <title>오로라 심리상담 연구소 - 양산, 부산 심리상담소</title>
        <meta name="description" content="양산, 부산 정서중심 상담 심리상담소소" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />{" "}
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
            <div className="section-title">
              <h2>개인상담</h2>
            </div>
            <div className="section-text text">
              <p>
                <ColorfulText>
                  개인은 살아가면서 다양한 감정적 어려움을 경험합니다. 스트레스, 불안, 우울, 자기
                  비난, 감정 조절의 어려움 등은 누구에게나 찾아올 수 있습니다. 하지만 이런 감정들이
                  지속되면 일상생활이 위축되고, 관계에서도 어려움을 겪게 됩니다. 정서중심 개인
                  상담은 내담자가 자신의 감정을 더 깊이 이해하고, 건강하게 표현하는 방법을 배우도록
                  돕습니다. 때때로 우리는 감정을 억누르거나 회피하려는 경향이 있지만, 오히려 감정을
                  마주하고 수용할 때 더 큰 변화를 경험할 수 있습니다. 상담을 통해 자신을 있는 그대로
                  받아들이고, 부정적인 감정을 긍정적인 성장의 기회로 바꾸는 과정에 집중합니다. 또한,
                  과거의 상처나 트라우마가 현재의 감정 반응에 미치는 영향을 탐색하고, 이를 치유할 수
                  있도록 돕습니다. 감정을 안전한 환경에서 탐색하며, 스스로를 이해하고 수용하는
                  과정이 개인 상담의 핵심입니다. EFT 개인 상담을 통해 내면의 불안을 해소하고, 자기
                  자신과의 관계를 회복하며, 더욱 건강한 삶을 만들어갈 수 있습니다.
                </ColorfulText>
              </p>
            </div>
          </section>
          <Aurora hue={5.8} />
          <section className="section-wrapper">
            <div className="section-title">
              <h2>부부상담</h2>
            </div>
            <div className="section-text text">
              <p>
                <ColorfulText>
                  연인이나 부부 관계에서 가장 중요한 요소는 감정적 연결입니다. 하지만 관계가
                  지속될수록 서로를 이해하기 어려워지고, 반복되는 갈등으로 인해 감정적 거리가 생길
                  수 있습니다. 정서중심 커플 상담은 이러한 문제를 단순히 갈등 해결이 아닌, 감정적
                  유대 회복의 과정으로 접근합니다. 서로의 감정을 깊이 이해하고, 안전한 환경에서
                  감정을 표현하며, 관계의 근본적인 패턴을 변화시키는 것이 목표입니다. EFT를 통한
                  커플 상담은 연구를 통해 효과가 입증된 방법으로, 감정적 친밀감을 되찾고 신뢰를
                  회복하는 데 도움을 줍니다. 서로의 감정을 더 깊이 이해하고, 건강한 관계를 형성하는
                  첫걸음을 함께 시작하세요.
                </ColorfulText>
              </p>
            </div>
          </section>
          <section className="section-wrapper">
            <div className="section-title">
              <h2>가족상담</h2>
            </div>
            <div className="section-text text">
              <p>
                <ColorfulText>
                  가족은 가장 가까운 관계이지만, 때로는 가장 복잡한 갈등이 발생하는 곳이기도 합니다.
                  부모와 자녀 사이, 형제 간의 관계, 세대 간의 차이에서 오는 어려움 등 가족 내 갈등은
                  깊은 감정적 상처로 이어질 수 있습니다. 정서중심 가족 상담은 가족 구성원들이 서로의
                  감정을 이해하고, 건강한 방식으로 소통할 수 있도록 돕습니다. 특히, 가족 내에서
                  반복되는 갈등 패턴을 탐색하고, 감정적으로 안전한 환경을 조성하는 것이 핵심입니다.
                  EFT를 기반으로 한 가족 상담은 단순한 대화법을 넘어, 감정을 기반으로 한 진정한
                  이해와 유대감을 형성하는 과정입니다. 가족이 서로에게 더욱 따뜻한 존재가 될 수
                  있도록, 정서중심 가족 상담이 함께하겠습니다.
                </ColorfulText>
              </p>
            </div>
          </section>
        </main>
        <Header isReverse={false} />
        <Footer />
      </div>
    </>
  );
}
