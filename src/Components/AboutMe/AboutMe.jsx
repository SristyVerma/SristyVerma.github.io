import React from "react";
import style from "./AboutMe.module.css";
import Coding from "./Coding";
import Header from "./Header";

function AboutMe() {
  return (
    <>
    <div className="about section">
      <Header />
      <div className={style.aboutme} id="about" >
        <p>Hi, I’m Sristy Verma</p>
        <p>
          I an ambitious and aspiring Full Stack Web Developer who's passionate about coding and looking for a software developer role in an established organisation with the opportunity to work with the latest technologies on challenging and diverse projects.

I am an organised person who believes in continuous learning, improvement and appreciate constructive criticism.I am a calm and compose team player becuase it makes me see same thing in different ways.

If I could say one of the most interesting things about me, it's the fact that I'm always ready for any challenges that comes to my way in a calm and positive mindset.
        </p>
        <Coding />
      </div>
      </div>
    </>
  );
}

export default AboutMe;
