import React from "react";
import style from "./Name.module.css";
import img from "../imges/Sris.jpeg";
import { DownloadIcon } from "@chakra-ui/icons";
import Typewriter from "typewriter-effect";
import resume from "../imges/Sristy_Verma_Resume.pdf";


function Name() {

  const Handleonclick=()=>{
    window.open(`${resume}`);
   }

  return (
    <div className={style.name}  id="home">
      <p>
        Hi! I am <span>Sristy Verma</span>{" "}
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
        <img src={img} alt="avatar" />
      </div>
      <div className={style.resume} >
       
        <a href={resume} download="Sristy_Verma_Resume"  onClick={Handleonclick}>
          <button className={style.resumeButton}  >
            <DownloadIcon bg={"transparent"} />
            RESUME
          </button>
        </a>
      </div>
    </div>
  );
}

export default Name;
