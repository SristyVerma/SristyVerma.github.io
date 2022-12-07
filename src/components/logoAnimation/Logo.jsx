import React from 'react'
import './logo.scss'
import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap'


const Logo = () => {
  const bgRef = React.useRef()
  const outLineRef = React.useRef()
  const outLineRef2 = React.useRef()
  const solidLogoRef = React.useRef()

  React.useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
    setTimeout(() => {
      gsap
        .timeline()
        .to(bgRef.current, {
          duration: 1,
          opacity: 1,
        })
        .from(outLineRef.current, {
          drawSVG: 0,
          duration: 4,
        })
        .from(outLineRef2.current, {
          drawSVG: 0,
          duration: 4,
        })
      gsap.fromTo(
        solidLogoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 0.065,
          delay: 4,
          duration: 10,
        },
      )
    }, 4000)
  }, [])

  return (
    <div className="logo-container switch__stroke-color" ref={bgRef}>
    
      <img className='solid-logo' src="https://media-exp1.licdn.com/dms/image/D4D03AQFkFaFGTfWcEw/profile-displayphoto-shrink_800_800/0/1668877117663?e=2147483647&v=beta&t=EmUH9dK6tnGERG9Bj9e8wPUv9pVJi3v9RtoPSRidx3I" alt="ntfound"/>
    </div>
  )
}

export default Logo
