import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="header">
      <div className="container d-flex">
        <div className="logo-container d-flex">
          <img src="images/logo.png" alt="logo" className="logo-figure" />
          <div className="logo-name">
            <Link to="/" className="link-item link">
              Lamy Noodle
            </Link>
          </div>
        </div>
        <ul className="header-links d-flex">
          <li className="header-link">
            <Link to="/" className="link-item link pd-3 link-font">
              首頁
            </Link>
          </li>
          <li className="header-link">
            <Link to="/order" className="link-item link pd-3 link-font">
              點餐
            </Link>
          </li>
          <li className="header-link">
            <Link to="/introduction" className="link-item link link-font pd-3">
              簡介
            </Link>
          </li>
          <li className="header-link">
            <Link to="/login" className="link-item link link-font pd-3">
              會員
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
