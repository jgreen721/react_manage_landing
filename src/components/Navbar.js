import React from "react";

const NavBar = ({ setShowMenu, showMenu }) => {
  return (
    <div className="nav">
      <img className="main-logo" src="./images/logo.svg" alt="logo" />
      <div className="nav-row">
        <ul className="nav-links">
          <li className="nav-item">Pricing</li>
          <li className="nav-item">Product</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Careers</li>
          <li className="nav-item">Community</li>
        </ul>
        <button className="btn started-btn">Get Started</button>
      </div>
      <img
        onClick={() => setShowMenu(!showMenu)}
        className="burger-icon"
        src="./images/icon-hamburger.svg"
        alt=""
      />
    </div>
  );
};

export default NavBar;
