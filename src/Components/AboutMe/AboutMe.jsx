import React from "react";
import style from "./AboutMe.module.css";
import Coding from "./Coding";
function AboutMe() {
  return (
    <>
    <div className="about section" id="about" style={{ width: '100%', overflowX: 'hidden' }}>
    <div className={style.header} >About <span style={{color:"#36f588"}}>me</span></div>
      <div className={style.aboutme} id="about.about.section" >
        <p>Hi, I’m Sristy Verma</p>
        <p id="user-detail-intro">
        "I'm an ambitious Full Stack Web Developer passionate about coding and seeking a software developer role. I value continuous learning, improvement, and constructive criticism. As a calm and composed team player, I embrace challenges with a positive mindset. My skills include HTML, CSS, JavaScript, React, Redux, NodeJS, Express, and Typescript."
        </p>
        <Coding />
      </div>
      </div>
    </>
  );
}

export default AboutMe;
