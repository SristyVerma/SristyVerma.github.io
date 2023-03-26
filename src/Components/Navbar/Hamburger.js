import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import style from "./Navbar.module.css";
import resume from "../images/Sristy_Verma_Resume.pdf"
import HandleOnClick from '../HandleOnClick'
export default function Hamburger({ isOpen, setOpen }) {
  const btnRef = React.useRef();

  function onClose() {
    setOpen(false);
  }
  // const Handleonclick=()=>{
  //   window.open(`${resume}`);
  //  }

  return (
    <>
      
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"#36f588"} fontSize="20px" />

          <DrawerBody padding="40px" bg={"#1B1B1B"} color="#36f588">
            <div className={style.hamburger}>
              <a href="#home">
                <div onClick={() => onClose()}>
                  <p> Home</p>
                </div>
              </a>
              <a href="#about">
                <div onClick={() => onClose()}>
                  <p> About</p>
                </div>
              </a>
              <a href="#skills">
                <div onClick={() => onClose()}>
                  <p> Skills</p>
                </div>
              </a>
              <a href="#projects">
                <div onClick={() => onClose()}>
                  <p> Projects</p>
                </div>
              </a>
              <a href="#contact">
                <div onClick={() => onClose()}>
                  <p> Contact</p>
                </div>
              </a>
              <a href={resume} download="Sristy_Verma_Resume"  onClick={HandleOnClick} >
                <div onClick={() => onClose()}>
                  <p> Resume</p>

                </div>
              </a>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
