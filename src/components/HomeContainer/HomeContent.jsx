import React from "react";
import HomeContentStyles from "./HomeContent.module.css";
import homeImage from "../Assests/homeImage.jpg";
import { Link } from "react-scroll";

const HomeContent = () => {
  return (
    <section className={HomeContentStyles.HomeContent}>
      <div className={HomeContentStyles.HomeContent_left_main}>
        <div className={HomeContentStyles.Socialicons}>
          <a href="https://github.com/HARIP9080" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/harip-a-311183228/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://x.com/Cse032?t=SVN_LWRDtZBYba4N6B-Lxw&s=09" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="mailto:aarif2001as@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>

        <div className={HomeContentStyles.HomeContent_left}>
          <h1>
            <span>I'm</span> Harip
          </h1>
          <h2 className={HomeContentStyles.creative_dev}>
            <span>Creative</span> Front-End Developer
          </h2>
          <h5>
            I'm a Frontend Web Developer dedicated to the art of transforming
            ideas into functional and aesthetically pleasing web applications,
            where my commitment to innovation and attention to detail converge
            to elevate user engagement and satisfaction
          </h5>
          <div className={HomeContentStyles.HomeContent_left_btn}>
            <a
              href="https://drive.google.com/file/d/1M3tVO0VcxDjLGRFF0aDOfmgNUl0q8Kyj/view?usp=drivesdk"
              target="_blank" download={true}
            >
              <button className={HomeContentStyles.btn_resume}>Resume</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
              <button className={HomeContentStyles.btn_work}>My Work</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={HomeContentStyles.HomeContent_right}>
        <img src={homeImage} alt="" />
      </div>
    </section>
  );
};
export default HomeContent;
