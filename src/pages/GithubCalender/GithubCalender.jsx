import Fade from 'react-reveal/Fade'

import '../../components/header/header.scss'
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import './GithubCalender.css'
import Sristy_Verma_Resume from '../../assets/images/Sristy_Verma_Resume.pdf'

// import Reveal from 'react-reveal/Reveal'

import { Blast } from '../../components'
import '../about/about.scss'
 const GithubCalender = () => {
  const [letterClass, setLetterClass] = React.useState('text-animate')
  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 12;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (   <>
    {/* <Reveal>
      <div className="fake-big">Github</div>
    </Reveal> */}
    <div className="section-about-wrapper section__padding">
      <article className="section-about-description">
        <div>
          <h2 arial-aria-label="About and skills">
            <Blast
              letterClass={letterClass}
              arrayStr={[
                'R',
                'e',
                's',
                'u',
                'm',
                'e',
                ' ',
                '&',
                ' ',
                
                                  'G',
                  'i',
                  't',
                  'h',
                  'u',
                  'b',
               
                
              ]}
              indexLetter={15}
            />
          </h2>
        
          
         
          
        </div>
      </article>
       {selectLastHalfYear ? (
          <GitHubCalendar
            username="sristyverma"
            transformData={selectLastHalfYear}
            blockMargin={5}
            blockRadius={7}
            blockSize={16}
            theme={{
              level0: "#F0F0F0",
              level2: "#01BD3D",
              level1: "#7AC7C4",
              level3: "#F73859",
              level4: "#384259",
            }}
            showWeekdayLabels
          >
            <ReactTooltip delayShow={20} html />
          </GitHubCalendar>
        ) : (
       "Not found"
        )}
        <br/>
        <br/>
        
                <div style={{display:"flex",flexDirection:"row",gap:"0px"}}>
                <img
            
            src="https://github-readme-streak-stats.herokuapp.com/?user=sristyverma&theme=black"
            alt="sristyverma"
          />
       
      
        
       
          <img className='change'
            src="https://github-readme-stats.vercel.app/api?username=sristyverma&show_icons=true&locale=en&theme=black"
            alt="sristyverma"
          />
                </div>
 <br/>

<img src="https://github-readme-stats.vercel.app/api/top-langs?username=sristyverma&show_icons=true&locale=en&layout=compact&theme=grey"
                          alt="sristyverma"
                        />
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
    </div>
  
  </>
  )
};
export default GithubCalender






















