import React from "react";
import { Element } from "react-scroll";
import AboutStyles from "./AboutContainer.module.css";
import ProfilePhoto from "../Assests/harip.jpeg";

const AboutContainer = () => {
  return (
    <Element name="about" className={AboutStyles.aboutContainer}>
      <div className={AboutStyles.aboutContainer_image}>
        <img src={ProfilePhoto} alt="" />
      </div>
      <div className={AboutStyles.aboutContainer_getMeKnow}>
        <div className={AboutStyles.aboutContainer_getContent}>
          <h2>ABOUT</h2>
          <h4>Get to know me!</h4>
          <h5 className={AboutStyles.head_1}>
            A passionate and versatile frontend web developer, currently
            residing in Bengaluru. I am actively seeking a job in the field of
            Web & Software Development
          </h5>
          <h5 className={AboutStyles.head_2}>
            I am always excited to learn new things and develop my skills,
            especially in the field of new technologies, which I am very
            passionate about
          </h5>
        </div>
        <div className={AboutStyles.contacts}>
          <div className={AboutStyles.mobile}>
            <a href="tel:+919080295168">
              <i className="fa-solid fa-phone"></i>
              <span>+91 9080295168</span>
            </a>
          </div>
          <div className={AboutStyles.email}>
            <a href="mailto:aarif2001as@gmail.com">
              <i className="fa-solid fa-envelope"></i>
              <span>aarif2001as@gmail.com</span>
            </a>
          </div>
        </div>
        <div className={AboutStyles.aboutContainer_education}>
          <div className={AboutStyles.education}>
            <h4>Education</h4>
            <h2>B.E Computer Science Engineering</h2>
            <h5>Mahendra Engineering College</h5>
            <h5>Mallasamudram West, Namakkal, Tamil Nadu 637503</h5>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default AboutContainer;
