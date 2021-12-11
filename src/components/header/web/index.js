import React from "react";
import "./web.css";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
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
      <div className="web-option">
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
      {/* <div className="web-option">
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
      <div className="web-option">
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
  );
}

export default Web;
