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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
        <Header />
        <main>
          <section className="section-wrapper">
            <div className="section-title">
              <h2>정서중심 상담이란</h2>
            </div>
            <div className="section-text text">
              <p>
                <ColorfulText>
                  정서중심 상담(EFT, Emotion-Focused Therapy)은 감정이 인간의 경험과 관계 형성에서
                  핵심적인 역할을 한다는 이해를 바탕으로 한 심리치료 접근법입니다. 이 상담 방식은
                  단순히 문제를 해결하는 것을 넘어, 개인과 관계 속에서의 감정을 깊이 탐색하고
                  조절하는 능력을 키우는 데 집중합니다. 우리는 감정을 억누르거나 피하기보다는,
                  그것을 이해하고 수용함으로써 삶의 방향을 긍정적으로 바꿀 수 있습니다. 특히, 부부,
                  개인, 가족 관계에서 발생하는 갈등의 원인은 종종 깊이 자리한 감정에서 비롯됩니다.
                  정서중심 상담을 통해 우리는 이러한 감정을 안전한 환경에서 탐색하고, 건강한
                  방식으로 표현할 수 있도록 돕습니다. EFT는 과학적으로 검증된 접근법으로, 부부 및
                  가족 치료뿐만 아니라 개인 상담에서도 효과적인 방법으로 인정받고 있습니다. 감정을
                  이해하는 과정에서 우리는 더 깊이 연결되고, 치유될 수 있습니다.
                </ColorfulText>
              </p>
            </div>
          </section>

          <section className="section-wrapper">
            <div className="section-title">
              <h2>정서중심 상담의 효과</h2>
            </div>
            <div className="section-text text">
              <p>
                <ColorfulText>
                  정서중심 상담은 관계의 질을 향상시키고, 정서적 안정감을 회복하는 데 큰 효과를
                  발휘합니다. 연구에 따르면, EFT를 받은 커플의 70~75%가 관계의 본질적인 변화와
                  회복을 경험하며, 90% 이상이 만족스러운 개선을 보입니다. 첫째, 정서적 소통 능력이
                  향상됩니다. 우리는 감정을 표현하는 법을 배우고, 상대방의 감정을 이해하는 능력을
                  키울 수 있습니다. 둘째, 불안과 갈등이 감소합니다. 감정을 건강하게 다루면서
                  불필요한 오해와 충돌이 줄어들고, 관계 속에서 안정감을 찾을 수 있습니다. 셋째, 자기
                  이해가 깊어집니다. 자신의 감정을 인식하고 조절하는 능력이 향상되면서, 전반적인
                  삶의 만족도가 높아집니다. EFT는 관계뿐만 아니라 개인의 내면 성장에도 긍정적인
                  영향을 미칩니다. 건강한 관계를 원하신다면, 정서중심 상담이 그 출발점이 될 수
                  있습니다.
                </ColorfulText>
              </p>
            </div>
          </section>
          <Aurora hue={2.8} />
          <section className="section-wrapper">
            <div className="section-title">
              <h2>정서중심 상담의 과정</h2>
            </div>
            <div className="section-text text">
              <p>
                <ColorfulText>
                  정서중심 상담은 감정의 흐름을 이해하고, 건강하게 표현하는 과정을 단계적으로
                  진행합니다. 일반적으로 세 가지 주요 단계로 구성됩니다. 첫 번째 단계는 문제 탐색과
                  관계 이해입니다. 이 과정에서 내담자는 자신의 감정과 관계 패턴을 인식하고, 상담자는
                  이를 객관적으로 조망할 수 있도록 돕습니다. 두 번째 단계는 감정의 재구성입니다.
                  기존의 부정적인 감정 패턴을 인식하고, 이를 보다 건강한 방식으로 표현하고
                  경험하도록 유도합니다. 이 과정에서 안전한 환경 속에서 감정을 표현하는 것이 핵심이
                  됩니다. 마지막 단계는 새로운 관계 패턴 형성입니다. 내담자는 상담 과정에서 배운
                  정서적 소통 방식을 일상생활에 적용하고, 더 깊은 유대감을 형성하는 방법을
                  연습합니다. EFT는 감정을 다루는 능력을 향상시켜, 상담이 끝난 이후에도 지속적인
                  변화를 가져올 수 있도록 합니다.
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
