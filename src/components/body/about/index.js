import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />{" "}
          <span className="info-name">Dhruv Samant</span>. <br /> A Web
          Developer passionate about publishing new and useful products,
          enhancing the internet experience for the users.
          <br />
          <h1></h1>I started my web development journey in September, 2021.
          Since then I have learnt new technologies and acquired Skills like
          <i>
            {" "}
            Javascript, ReactJS, MongoDB, Express, Node, GraphQL, Hasura,
            PostgreSQL, NextJS, Typescript and Jest.
          </i>
          <h1></h1>I believe in showing a proof of my work, rather than listing
          my skills on a shiny piece of paper. Some of my works are shown below.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/Development-pana.png").default}
            className="picture"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
