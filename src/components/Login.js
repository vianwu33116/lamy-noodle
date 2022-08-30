import React from "react";
import Layout from "./Layout";

const Login = () => {
  return (
    <div className="login-main">
      <Layout>
        <div className="form-container">
          <form action="" className="form mg-c d-flex bdr-1">
            <h1 className="login-h1 txt-c mb-01">Login</h1>
            <div className="input-container mb-01">
              <label htmlFor="email" className="form-label p-price">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="input-container mb-1">
              <label htmlFor="password" className="form-label p-price">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Aa12345678"
              />
            </div>
            <div className="input-container mb-1">
              <input type="button" className="btn-login btn mb-1" value="Login" />
            </div>
            <div className="other-ways p-price bd mb-01 txt-c">
              <img
                src="images/icon_fb.svg"
                alt="facebook-icon"
                style={{ width: 24, height: 24 }}
                className="mr-4"
              />
              Facebook Login
            </div>
            <div className="other-ways p-price bd txt-c">
              <img
                src="images/icon_google.svg"
                alt="google-icon"
                style={{ width: 24, height: 24 }}
                className="mr-4"
              />
              Google Login
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default Login;
