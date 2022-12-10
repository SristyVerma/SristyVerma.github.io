import React from 'react'

// components
import { Header} from '../../components'
// pages
import { Contact, About, ProjectPage,Skills } from '../../pages'
import  GithubCalender  from '../GithubCalender/GithubCalender'

const Home = () => {
  return (
    <>
      <Header />
      <section className="section-about">
        <About />
        <Skills />
      </section>
      <ProjectPage />
     <GithubCalender/>
      <Contact />
    </>
  )
}

export default Home
