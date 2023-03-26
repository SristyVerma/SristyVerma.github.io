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
          I an ambitious and aspiring Full Stack Web Developer who's passionate about coding and looking for a software developer role in an established organisation on challenging and diverse projects.I am an organised person who believes in continuous learning, improvement and appreciate constructive criticism.I am a calm and compose team player becuase it makes me look same thing in different ways.I'm always ready for any challenges that comes to my way in a calm and positive mindset.I have dono many projects using HTML,CSS,Javascript,React,Redux,NodeJS,Express,Typescript.
        </p>
        <Coding />
      </div>
      </div>
    </>
  );
}

export default AboutMe;
