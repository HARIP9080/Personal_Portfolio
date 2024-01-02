import React from "react";
import ExperienceStyles from "./Experience.module.css";
import { Element } from "react-scroll";

const Experience = () => {
  return (
    <Element name="experience">
      <h2 className={ExperienceStyles.title}>Experience</h2>
      <section className={ExperienceStyles.ExperienceContainer}>
        <div className={ExperienceStyles.ExperienceData}>
          <h2>Gateway Software Solution Internship</h2>
          <h6>
            Gateway Software Solution as a front-end developer intern, contributing to dynamic web development projects and gaining hands-on experience with HTML, CSS, and modern front-end technologies, including JavaScript. Elevate your skills in a supportive environment while working on real-world projects to enhance your proficiency in front-end development.
            
          </h6>
          <h5>NOV 2022 - <span>DEC 2022</span></h5>
        </div>
      </section>
      </Element>
  );
};

export default Experience;
