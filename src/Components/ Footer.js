import React from "react";
import FooterBG from "../Images/footerbg.png";

const Footer = () => {
  return (
    <div className="footer">
      <div
        className="get-in-touch"
        style={{ backgroundImage: `url(${FooterBG})` }}
      >
        <div className="newsletter-and-form">
          <div className="newsletter">
            <p>Newslleter</p>
            <p>Get news about articles and updates in your inbox.</p>
          </div>
          <div className="form">
            <input type="text" name="name" id="" placeholder="NAME"/>
            <input type="email" name="email" id="" placeholder="EMAIL"/>
            <input type="text" name="message" id="" placeholder="MESSAGE"/>
          </div>
        </div>
        <p className="get-in-touch-text">GET<br />IN TOUCH</p>
        <button className="send">SEND</button>
      </div>
      <p className="copyright">Copyright 2022 All Right Reserved By SG</p>
    </div>
  );
};

export default Footer;
