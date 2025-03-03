import Head from "next/head";

import ColorfulText from "../components/ColorfulText";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  console.log("page reload");

  const router = useRouter();

  const formRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const descriptionRef = useRef();
  const buttonRef = useRef();
  const buttonContainerRef = useRef();
  const errorPopupRef = useRef();

  const [transitioning, setTransitioning] = useState(false);

  const sendInquiry = async (formData) => {
    console.log(formData.entries());

    // const response = await fetch("/api/sendEmail");
    // const result = await response.json();
    // console.log(result);

    // // change button to loading animation
    // buttonRef.current.classList.toggle("button-fade");
    // setTimeout(() => {
    //   buttonRef.current.disabled = true;
    //   buttonRef.current.innerHTML = "전달되었습니다";
    //   buttonRef.current.classList.toggle("button-fade");
    //   // setTransitioning(true);
    //   // setTimeout(() => {
    //   //   router.push("/inquired");
    //   // }, 2000);
    // }, 2000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // disable and change button to loading animation
    buttonRef.current.classList.toggle("button-fade");
    buttonRef.current.disabled = true;

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (response.ok) {
        console.log("Form submitted successfully", result);

        setTransitioning(true);
        setTimeout(() => {
          router.push("/inquired");
        }, 2000);
      } else {
        console.error("Error submitting form", result);

        buttonRef.current.innerHTML = "보내기";
        buttonRef.current.disabled = false;
        buttonRef.current.classList.toggle("button-fade");

        errorPopupRef.current.classList.toggle("fade-out");
        setTimeout(() => {
          errorPopupRef.current.classList.toggle("fade-out");
        }, 3000);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const handlePhoneChange = (e) => {
    const initValue = e.target.value;
    let formatedValue;

    if (initValue.length > 3 && initValue[3] !== "-") {
      formatedValue = initValue.slice(0, 3) + "-" + initValue.slice(3, initValue.length);
    } else if (initValue.length > 8 && initValue[8] !== "-") {
      formatedValue = initValue.slice(0, 8) + "-" + initValue.slice(8, initValue.length);
    } else if (initValue[initValue.length - 1] === "-") {
      formatedValue = initValue.slice(0, initValue.length - 1);
    }

    if (formatedValue) {
      e.target.value = formatedValue;
    }
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
      <div className={`wrapper page-fade ${transitioning ? "page-fade-out" : ""}`}>
        <Header />
        <main>
          <section className="contact-wrapper">
            <div className="contact-title">
              <h2>문의하기</h2>
            </div>
            <div className="contact-form-wrapper">
              <form ref={formRef} onSubmit={handleSubmit}>
                <fieldset id="contact-fieldset">
                  <div className="input-wrapper" id="name-wrapper">
                    <label htmlFor="contact-name">
                      이름
                      <span className="required-dot" aria-label="required"></span>
                    </label>
                    <input
                      ref={nameRef}
                      className="contact-input-name"
                      type="text"
                      name="name"
                      id="contact-name"
                      required
                    />
                  </div>

                  <div className="spacer"></div>

                  <div className="input-wrapper" id="phone-wrapper">
                    <label htmlFor="contact-phone">
                      연락처 <span className="required-dot" aria-label="required"></span>
                    </label>
                    <input
                      ref={phoneRef}
                      className="contact-input-phone"
                      type="tel"
                      maxLength={13}
                      onChange={handlePhoneChange}
                      pattern="010-[0-9]{3,4}-[0-9]{4}"
                      name="phone"
                      id="contact-phone"
                      required
                    />
                  </div>

                  <div className="input-wrapper" id="email-wrapper">
                    <label htmlFor="contact-email">이메일</label>
                    <input
                      ref={emailRef}
                      className="contact-input-email"
                      type="email"
                      name="email"
                      id="contact-email"
                    />
                  </div>

                  <div className="input-wrapper" id="description-wrapper">
                    <label htmlFor="contact-description">
                      문의내용 <span className="required-dot" aria-label="required"></span>
                    </label>
                    <textarea
                      spellCheck="false"
                      ref={descriptionRef}
                      className="contact-input-description"
                      name="description"
                      id="contact-description"
                      required
                    ></textarea>
                  </div>
                </fieldset>
                <div ref={buttonContainerRef} className="submit-button-container">
                  <button ref={buttonRef}>보내기</button>
                  <video autoPlay muted loop={true}>
                    <source src="/videos/contactButton.mp4" type="video/mp4" />
                  </video>
                </div>
              </form>
              <div ref={errorPopupRef} className="error-message fade-out">
                오류가 발생했습니다. 잠시 후 다시 시도해주세요. 불편을 드려 죄송합니다.
              </div>
            </div>
            <div className="contact-title">
              <h2>연락처</h2>
            </div>
            <div className="grid-right">
              <p>
                혹은, 아래 연락처 중 하나로 직접 연락하실 수 있습니다. 만약 부재중이면 다시 연락
                드리겠습니다.
                <br />
                <br />
              </p>
              <p>윤명희 소장</p>
              <ul>
                <li>T : 055 - 913 - 8094</li>
                <li>H : 010 - 4047 - 4335</li>
                <li>E : mheeyoon@naver.com</li>
              </ul>
            </div>
            <div className="contact-title">
              <h2>주소</h2>
            </div>
            <div className="grid-right">
              <p>
                오로라 심리상담 연구소
                <br />
                경상남도 양산시 물금읍 서들6길 3-3
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
