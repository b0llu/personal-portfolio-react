import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />{" "}
          <span className="info-name">Dhruv Samant</span>. <br /> I am a full
          stack web developer who loves working on frontend.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/Development-pana.png").default}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
