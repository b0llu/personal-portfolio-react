import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile";
import Web from "./web";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo">Dhruv</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <img className="menu-icon" src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png" width={"30px"} height={"30px"} />
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
