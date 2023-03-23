import React, { useState } from "react";
import style from "./Navbar.module.css";
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";
import Hamburger from "./Hamburger";
import resume from "../imges/Sristy_Verma_Resume.pdf"
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 
  function setOpen(value) {
    setIsOpen(value);
  }

  const Handleonclick=()=>{
    window.open(`${resume}`);
   }

  return (
    <div className={style.navbar}  id="nav-menu">
      <div className={style.logo}>
        <p >
          {" "}
          <span
            style={{ color: "#36f588"}}
          >
            Sristy
          </span>
           Verma
        </p>
      </div>
      <div className={style.menus}>
        <li className="nav-link home">
          <Link to="name" spy={true} smooth={true} offset={0} duration={700}>
            Home
          </Link>
        </li>
        <li className="nav-link about">
          <Link to="about" spy={true} smooth={true} offset={0} duration={700}>
            About
          </Link>
        </li>
        <li className="nav-link skills">
          <Link to="skill" spy={true} smooth={true} offset={0} duration={700}>
            Skill
          </Link>
        </li>
        <li className="nav-link projects">
          <Link to="project" spy={true} smooth={true} offset={0} duration={700}>
            Projects
          </Link>
        </li>
        <li className="nav-link contact">
          <Link
            to="contactMe"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
          >
            Contact
          </Link>
        </li>
        <li border="1px solid #36f488" bg={"#6a6a6a"} className="nav-link resume" >
        <a href={resume} download="Sristy_Verma_Resume"  onClick={Handleonclick} >
          <button   className={style.resumeButton} border="1px solid #36f488">
            <DownloadIcon bg={"#6a6a6a"} />
            Resume
          </button>
        </a>
        </li>

      </div>
      <div>
        <div onClick={() => setIsOpen(true)}>
          <HamburgerIcon
            color={"#36f588"}
            boxSize="1.5em"
           
          />
        </div>
        <Hamburger isOpen={isOpen} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Navbar;
