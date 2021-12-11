import React from "react";
import "./web.css";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
          <i class="fas fa-tasks option-icon"></i>
          Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i class="fas fa-laptop-code option-icon"></i>
          Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i class="fas fa-user option-icon"></i>
          Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
