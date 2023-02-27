import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sristy_Verma_Resume from '../../assets/images/Sristy_Verma_Resume.pdf'
import { MdArrowDropDown } from 'react-icons/md'
import Fade from 'react-reveal/Fade'
import Logo from '../logoAnimation/Logo'

import Blast from '../BlastAnimation/Blast'

import './header.scss'

const nameArray = ['S', 'r', 'i', 's', 't', 'y', ' ', 'V','e','r','m','a']
const jobArray = [
  'W',
  'e',
  'b',
  '',
  'D',
  'e',
  'v',
  'e',
  'l',
  'o',
  'p',
  'e',
  'r',
  '.',
]

const Header = () => {
  const [letterClass, setLetterClass] = useState('text-animate')


  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <section className="section-1 header__container section__padding" >
        <main className="intro-page">
          <h1 arial-label="Hi i'm sristy verma, full-stack web developer">
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>’</span>
            <span className={`${letterClass} _16`}>m</span> {''}
            <br/>
            <Blast
              letterClass={letterClass}
              arrayStr={nameArray}
              indexLetter={15}
            />
            <br />
            <Blast
              letterClass={letterClass}
              arrayStr={jobArray}
              indexLetter={22}
            />
          </h1>

         
          <Link to="/contact" className="contact-button">
            <div>
              <span className="bg switch__bg"></span>
              <span className="base switch__border-color"></span>
              <span className="text">Contact me</span>
            </div>
          </Link>
          <Fade left>
              <a
                style={{ marginTop: '2rem' }}
                href={Sristy_Verma_Resume}
                download
                className="contact-button submit-button"
              >
                <div>
                  <span className="bg switch__bg"></span>
                  <span className="base switch__border-color"></span>
                  <span className="text">RESUME</span>
                </div>
              </a>
            </Fade>
        <Logo/>
          <div className="scroll__wrapper switch__color">
            <MdArrowDropDown className="scroll__down switch__color" />
          </div>
        </main>
      </section>
    </>
  )
}

export default Header
