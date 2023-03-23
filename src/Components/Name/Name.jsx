import React from "react";
import style from "./Name.module.css";
import img from "../images/Sris.jpeg";
import { DownloadIcon } from "@chakra-ui/icons";
import Typewriter from "typewriter-effect";
import resume from "../images/Sristy_Verma_Resume.pdf";
import HandleOnClick from '../HandleOnClick'

function Name() {

  // const Handleonclick=()=>{
  //   window.open("https://drive.google.com/file/d/1fGbCicSELrReyNanrNUlBqjFIDWQzg9x/view?usp=share_link");
  //  }

  return (
    <div className={style.name}  id="home">
      <p>
        Hi! I am <span id="user-detail-name">Sristy Verma</span>{" "}
      </p>
      <p>
        <Typewriter
          options={{
            strings: ["Web Developer", "Tech Enthusiast",  "Team Player"],
            autoStart: true,
            loop: true,
          }}
        />
      </p>

      <div className={style.avatar} style={{height:"100%"}}>
        <img src={img} alt="avatar"  className="home-img"/>
      </div>
      <div className={style.resume} >
       
       
          <button className={style.resumeButton} id="resume-button-2"
 > <a href={resume} download="Sristy_Verma_Resume"  onClick={HandleOnClick}  id="resume-link-2">
            <DownloadIcon bg={"transparent"} />
            RESUME</a>
          </button>
        
      </div>
    </div>
  );
}

export default Name;
