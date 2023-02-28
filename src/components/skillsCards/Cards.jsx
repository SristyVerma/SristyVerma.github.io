import React from 'react'
import Fade from 'react-reveal/Fade'
import { skillSet } from '../../data/data'
import './cards.scss'

const Cards = () => {
  return (
    <div className="about-description-skills" >
      {skillSet.map((item, index) => (
        <Fade bottom key={index + item}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-container skills-card-img"
          >
            {item.icon}
            <span className="skill__name skills-card-name">{item.spanText}</span>
          </a>
        </Fade>
      ))}
    </div>
  )
}

export default Cards
