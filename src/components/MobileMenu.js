import React from "react";

const MobileMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div className={showMenu ? "mobile-parent" : "hide-menu"}>
      <div className="mobile-menu">
        <span onClick={() => setShowMenu(false)} className="close-menu">
          &times;
        </span>
        <li className="mobile-item">Pricing</li>
        <li className="mobile-item">Product</li>
        <li className="mobile-item">About Us</li>
        <li className="mobile-item">Careers</li>
        <li className="mobile-item">Community</li>
      </div>
    </div>
  );
};

export default MobileMenu;
