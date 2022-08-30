import React from "react";
import Layout from "components/Layout";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="home-main">
        <Layout>
          <div
            className="home-article article pd-3"
            style={{
              background: `url(images/spirit.jpg)`,
              height: `356px`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
              backgroundRepeat: `no-repeat`
            }}
          >
            <h1 className="home-h1 mb-1">Lamy Noodle 核心精神</h1>
            <p className="contxt">嚴選新鮮食材，湯頭當日現煮，絕不添加味素</p>
            <p className="contxt">十年留學日本，只為研習拉麵精隨</p>
            <p className="contxt">秉持著想把拉麵的感動帶給每一位客人的初衷</p>
          </div>
          <div className="home-article second-article">
            <div
              className="second-article-wrap mg-c"
              style={{
                background: `url(images/start-order.jpg)`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`,
                opacity: 0.8,
              }}
            >
              <h2 className="home-h2 mb-0">Lamy 點餐平台介紹</h2>
              <p className="contxt">
                在疫情下, 為了避免過多的人與人接觸, Lamy noodle 上架了點餐平台,
                使內用或來店取餐的顧客可以透過此平台來做點餐,
                而桌邊的點餐服務將不再提供, 希望大家在享用美食的當下,
                也能保持舒適安心的距離。
              </p>
              <div className="start-order mg-c">
                <Link to="/order" className="link">
                  Start Order
                </Link>
              </div>
            </div>
          </div>
          <div
            className="home-article third-article pd-3"
            style={{
              background: `url(images/new-product1.jpg)`,
              height: `380px`,
              backgroundSize: `cover`,
              backgroundPosition: `center left`,
              backgroundRepeat: `no-repeat`,
              opacity: 0.9,
            }}
          >
            <h2 className="home-h2 lh-1">本月推薦 － 辣味拉麵</h2>
          </div>
          <div className="home-article second-article">
            <h2 className="home-h2">新品上市 New arrival!</h2>
            <ul className="np-list container d-flex">
              <li className="list-item">
                <img src="images/dish7.jpg" alt="product" className="np-img" />
                <div className="intro-container d-flex">
                    <div className="content">
                        <h3 className="home-h3 txt-c">辣味拉麵</h3>
                        <p className="contxt">
                            新鮮辣椒熬製，在淋上獨門辣油，香辣順口，一口接一口停不下來，
                            想挑戰味蕾的刺激，你絕不能錯過。
                        </p>
                    </div>
                    <p className="contxt date txt-c">2022/06/06</p>
                </div>
              </li>
              <li className="list-item">
                <img src="images/dish8.jpg" alt="product" className="np-img" />
                <div className="intro-container d-flex">
                    <div className="content">
                        <h3 className="home-h3 txt-c">泡菜拉麵</h3>
                        <p className="contxt">
                            日式高湯碰上韓式泡菜撞出日韓新滋味，引進正統韓式泡菜，
                            加上韓式辣粉，是驚豔的味道，還是韓味呢?
                        </p>
                    </div>
                    <p className="contxt date txt-c">2022/07/10</p>
                </div>
              </li>
              <li className="list-item">
                <img src="images/dish9.jpg" alt="product" className="np-img" />
                <div className="intro-container d-flex">
                    <div className="content">
                        <h3 className="home-h3 txt-c">蔬食拉麵</h3>
                        <p className="contxt">
                            素食者想吃拉麵? 除了本店的番茄拉麵可選擇外，用蘿蔔燉煮的蔬食拉麵，
                            搭配特製素肉，將會是您的新選擇。
                        </p>
                    </div>
                    <p className="contxt date txt-c">2022/07/28</p>
                </div>
              </li>
            </ul>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Home;
