import React from "react";
import Star from "../Images/Star_3.png";
import Linestar from "../Images/Star_4.png";
import Boy from "../Images/boy.png";

const Intro = () => {
  return (
    <div className="text">
      <p className="fresh">Fresh</p>
      <p className="year">2022</p>
      <p className="look">Look</p>
      <div className="square"></div>
      <img src={Star} alt="" className="star" />
      <img src={Boy} alt="" className="boy" />
      <div className="line">
        <div className="line-stroke"></div>
        <img src={Linestar} alt="" className="line-star" />
      </div>
      <span className="see-more">
        See More <i class="fa-solid fa-arrow-up"></i>
      </span>
      <div className="intro-product-details">
        <p className="intro-product-title">OREGON JACKET</p>
        <p className="intro-product-price">$124</p>
      </div>
    </div>
  );
};

export default Intro;
