import React from "react";
import "./contact.css";
import Separator from "../../common/separator/index";
import SocialContact from "../../common/social-contact/index";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <p>Want to get in touch? Contact me on any of the platform</p>
        <SocialContact />
      </div>
    </div>
  );
}

export default Contact;
