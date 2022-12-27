import React from 'react'
import Fade from 'react-reveal/Fade'
import './projects.scss'

const Project = (props) => {
  const { imgUrl, name, desc, stack, gitHubUrl, website } = props
  return (
    <Fade bottom>
      <section className=".section__projects-wrapper">
      <section className="section__projects-single-projects">
        <img src={imgUrl} style={{width:"100%",
                height:"100%",
                objectFit:"fill"}} alt="" />
        <div className="section__projects-contents">
          <p>{name}</p>
          <p className="desc">{desc}</p>
          <div className="section__projects-stack">
            <h2>Built with</h2>
            <span>{stack}</span>
          </div>
          <div className="section__projects-icon">
            <a href={gitHubUrl.url} className="switch__color">
              {gitHubUrl.icon}
            </a>
            <a href={website.url} className="switch__color">
              {website.icon}
            </a>
          </div>
        </div>
      </section>
      </section>
    </Fade>
  )
}

export default Project
