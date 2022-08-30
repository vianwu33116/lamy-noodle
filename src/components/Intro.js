import React from "react";
import Layout from "./Layout";

const Intro = () => {
  return (
    <div className="intro-main">
      <Layout>
        <div
          className="banner d-flex"
          style={{
            background: `url(images/intro_bg.jpg)`,
            height: `200px`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
          }}
        >
          <h1 className="intro-title">
            <span className="fw-bold">關於我們</span>
          </h1>
        </div>
        <div className="article d-flex">
          <div className="content">
            <p className="txt">
              創立於 2010 年，
              初衷起因於一碗拉麵，
              看似平凡卻令人回味無窮，
              麵條的那股嚼勁，
              和香醇濃郁的湯底，
              依舊歷歷在目
            </p>
          </div>
          <div
            className="article-img"
            style={{
              background: `url(images/article_bg01.jpg)`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
              backgroundRepeat: `no-repeat`,
            }}
          ></div>
        </div>
        <div className="article article02 d-flex">
          <div className="content">
            <p className="txt">
              創立於 2010 年，
              初衷起因於一碗拉麵，
              看似平凡卻令人回味無窮，
              麵條的那股嚼勁，
              和香醇濃郁的湯底，
              依舊歷歷在目
            </p>
          </div>
          <div
            className="article-img"
            style={{
              background: `url(images/article_bg03.jpg)`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
              backgroundRepeat: `no-repeat`,
            }}
          ></div>
        </div>
      </Layout>
    </div>
  );
};

export default Intro;
