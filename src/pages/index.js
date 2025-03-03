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
          <div className="text">
            <ColorfulText>
              <p>
                관계는 우리 삶에서 가장 중요한 요소 중 하나입니다. 사랑과 연결을 통해 우리는
                성장하고, 때로는 상처받기도 합니다. 하지만 관계에서 갈등이 생기거나 감정적 거리감이
                느껴질 때, 우리는 어디서부터 풀어나가야 할지 막막할 수 있습니다. 오로라 심리상담
                연구소는 이런 순간에 따뜻한 길잡이가 되어드립니다. 정서중심 상담(EFT)은 감정을 깊이
                이해하고, 건강한 방식으로 표현하며, 관계를 회복하는 데 초점을 맞춘 상담
                접근법입니다. 우리는 당신이 자신의 감정을 보다 명확하게 인식하고, 관계 속에서
                안전하고 깊은 유대를 형성할 수 있도록 돕습니다. 혼자가 아닙니다. 불안, 갈등,
                거리감으로 힘든 순간에도, 변화는 가능합니다. 오로라 심리상담 연구소와 함께 관계를
                회복하고 더욱 건강한 연결을 만들어보세요.
              </p>
            </ColorfulText>
          </div>
          <Aurora />
          <section className="section-wrapper">
            <div className="section-title">
              <h2>상담이 도움이 될 수 있는 분야</h2>
            </div>
            <div className="section-text">
              <ColorfulText>
                <ul className="section-list">
                  <li>유대감, 친밀감, 상호 이해를 심화하고자 하는 욕구</li>
                  <li>관계에서 반복되는 갈등이나 어려운 기분</li>
                  <li>공동 양육의 어려움</li>
                  <li>성적 문제</li>
                  <li>중요한 결정을 내리는 데 어려움(예: 동거, 결혼, 자녀 출산, 이사)</li>
                  <li>관계에 좋은 미래가 있다고 느끼는 것과 희망이 부족하다는 것 사이를 오가며</li>
                  <li>충성심, 질투, 불안의 문제</li>
                  <li>
                    침체와 관계에서 중요한 일이 일어나지 않는다는 느낌(종종 무엇이 일어나야 하는지
                    식별할 수 없음)
                  </li>
                  <li>어려운 가족, 직업 또는 사회적 상황</li>
                  <li>한 파트너의 질병</li>
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
