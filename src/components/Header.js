import React from "react";
import Navbar from "./Navbar";

const Header = ({ setShowMenu, showMenu }) => {
  return (
    <header>
      <Navbar setShowMenu={setShowMenu} showMenu={showMenu} />
      <div className="header-row">
        <div className="header-col header-content-col">
          <div className="header-content">
            <h1 className="header-h1 my-2">
              Bring everyone together to build better products
            </h1>
            <p className="header-p my-2">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the longer team goals in view.
            </p>
            <button className="started-btn my-2">Get Started</button>
          </div>
        </div>
        <div className="header-col header-img-col">
          <img
            className="header-img"
            src="./images/illustration-intro.svg"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
