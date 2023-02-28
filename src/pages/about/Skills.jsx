import React from 'react'




// components
import { Cards, Blast } from '../../components'
import './about.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = React.useState('text-animate')
  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      {/* <Reveal>
        <div className="fake-big">Skills</div>
      </Reveal> */}
      <div className="section-about-wrapper section__padding"  id="skills">
        <article className="section-about-description">
          <div>
            <h2 arial-aria-label="About and skills">
              <Blast
                letterClass={letterClass}
                arrayStr={[
                
                  'M',
                  'y',
                  ' ',
                  'S',
                  'k',
                  'i',
                  'l',
                  'l',
                  's',
                ]}
                indexLetter={15}
              />
            </h2>
           
             
          </div>
        </article>
        {/* programming language cards */}
        <Cards />
      </div>
    </>
  )
}

export default Skills
