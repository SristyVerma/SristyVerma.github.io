import React from 'react'

// components
import { Header} from '../../components'
// pages
import { Contact, About, ProjectPage,Skills } from '../../pages'
import  GithubCalender  from '../GithubCalender/GithubCalender'

const Home = () => {
  return (
    <div  id="home">

      <Header />
      <section className="section-about">
        <About />
        <Skills />
      </section>
      <ProjectPage />
     <GithubCalender/>
      <Contact />
    </div>
  )
}

export default Home
