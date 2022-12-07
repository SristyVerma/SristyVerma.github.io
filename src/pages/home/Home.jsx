import React from 'react'
// components
import { Header} from '../../components'
// pages
import { Contact, About, ProjectPage,Skills } from '../../pages'

const Home = () => {
  return (
    <>
      <Header />
      <section className="section-about">
        <About />
        <Skills />
      </section>
      <ProjectPage />
     
      <Contact />
    </>
  )
}

export default Home
