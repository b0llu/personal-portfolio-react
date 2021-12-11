import React from "react";
import "./mobile.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/macos-close.png"
          height={"30px"}
          width={"30px"}
        />
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#project">
            <img
              className="option-icon"
              src="https://img.icons8.com/ios-glyphs/50/000000/project-management.png"
              width={"20px"}
              height={"20px"}
            />
            Projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <img
              className="option-icon"
              src="https://img.icons8.com/ios-glyphs/50/000000/laptop.png"
              width={"20px"}
              height={"20px"}
            />
            Skills
          </a>
        </div>
        {/* <div className="mobile-option">
        <a href="#work">
          <img
            className="option-icon"
            src="https://img.icons8.com/ios-glyphs/30/000000/work.png"
            width={"20px"}
            height={"20px"}
          />
          Work
        </a>
      </div> */}
        <div className="mobile-option">
          <a href="#contact">
            <img
              className="option-icon"
              src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png"
              width={"20px"}
              height={"20px"}
            />
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
