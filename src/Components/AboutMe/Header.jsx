import React from 'react'
import style from "./AboutMe.module.css";


function Header() {
  return (
    <div className={style.header} id="about.about.section">About <span style={{color:"#36f588"}}>me</span></div>
  )
}

export default Header