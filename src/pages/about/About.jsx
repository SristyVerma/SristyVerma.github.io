import React from 'react'

import Reveal from 'react-reveal/Reveal'
import Fade from 'react-reveal/Fade'

// components
import { Blast } from '../../components'
import './about.scss'

const About = () => {
  const [letterClass, setLetterClass] = React.useState('text-animate')
  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <Reveal>
        <div className="fake-big">About</div>
      </Reveal>
      <div className="section-about-wrapper section__padding">
        <article className="section-about-description">
          <div>
            <h2 arial-aria-label="About and skills">
              <Blast
                letterClass={letterClass}
                arrayStr={[
                  'A',
                  'b',
                  'o',
                  'u',
                  't',
                  '',
                  'M',
                  'e',
                  
                ]}
                indexLetter={15}
              />
            </h2>
            <Fade bottom>
              <p>
                I’m an ambitious and aspiring Full Stack Web Developer who's passionate about
                coding and looking for a software developer role in an established organisation with
                the opportunity to work with the latest technologies on
                challenging and diverse projects.
              </p>
            </Fade>
            <Fade bottom>
              <p>
            I am an organised person who believes in continuous learning,
            improvement and appreciate constructive criticism.I am
            a calm and compose team player becuase it makes me see same thing in different ways.

              </p>
            </Fade>
            <Fade bottom>
              <p>
                If I could say one of the most interesting things about me, it's
                the fact that I'm always ready for any challenges that comes to
                my way in a calm and positive mindset. 
              </p>
            </Fade>
           
            
          </div>
        </article>
        {/* programming language cards */}
       
      </div>
    </>
  )
}

export default About
