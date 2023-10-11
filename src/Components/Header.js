import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <span>
          <i className="fa-solid fa-truck"></i>
        </span>
        <span>Free Delivery</span>
        <span>|</span>
        <span>Return Policy</span>
      </div>
      <div className="header-right">
        <span>Login</span>
        <span className="follow-us">Follow US</span>
        <span>
          <i className="fa-brands fa-facebook-f"></i>
        </span>
        <span>
          <i className="fa-brands fa-linkedin-in"></i>
        </span>
        <span>
          <i className="fa-brands fa-twitter"></i>
        </span>
        <span>
          <i className="fa-brands fa-instagram"></i>
        </span>
      </div>
    </div>
  );
};

export default Header;
