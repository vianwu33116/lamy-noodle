import React from "react";

const Footer = () => {
  return (
    <div className="footer d-flex">
      <div className="footer-items">
        <h3 className="home-h3 1h-1">聯絡資訊</h3>
        <ul className="contact footer-wrap">
          <li className="contact-item footer-item">
            Phone:
            <a href="tel:+0911123456" className="link contact-link">
              0911123456
            </a>
          </li>
          <li className="contact-item footer-item">
            Email:
            <a
              href="mailto: lamynoodle@gmail.com"
              className="link contact-link"
            >
              lamynoodle@gmail.com
            </a>
          </li>
          <li className="contact-item footer-item">
            IG:
            <a href="/" className="link contact-link">
              lamy_noodle
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-items">
        <h3 className="home-h3 1h-1">營業時間</h3>
        <ul className="open-time footer-wrap">
          <li className="open-time-item footer-item">
            週三 ~ 週五: 11:30 ~ 14:00 / 17:00 ~ 20:00
          </li>
          <li className="open-time-item footer-item">
            週末: 11:30 ~ 14:00 / 16:30 ~ 20:30
          </li>
          <li className="open-time-item footer-item">週一、週二: 公休</li>
          <li className="open-time-item footer-item">國定假日請見粉專公告</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
