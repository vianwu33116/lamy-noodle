import React from "react";
import Layout from "components/Layout";
import { Link } from "react-router-dom";

const FinishOrder = () => {
  return (
    <div className="finish-main">
      <Layout>
        <nav className="cart-nav">
          <div className="container d-flex">
            <Link to="/" className="link">
              首頁
            </Link>
            <span className="material-symbols-outlined">chevron_right</span>
            <Link to="/order" className="link">
              點餐
            </Link>
            <span className="material-symbols-outlined">chevron_right</span>
            訂單確認
            <span className="material-symbols-outlined">chevron_right</span>
            確認完成
          </div>
        </nav>
        <div className="content-box">
          <div className="confirm-content mg-c d-flex">
            <span class="material-icons check">check_circle</span>
            <p className="txt">確認完成</p>
            <p className="txt">您的訂單已送出</p>
            <p className="txt">餐點用心現做，請耐心等候</p>
            <Link to="/">
              <div className="return-home txt-c">回首頁</div>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default FinishOrder;
