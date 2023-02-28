import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import {
  Home,
  About,
  Contact,
 Skills,
  ProjectPage,
  ErrorPage,
  GithubCalender,
 

} from './pages'

// components
import { Navbar, ThemeTemplate } from './components'

import './utils/templateColors.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ThemeTemplate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/github" element={<GithubCalender />} />
       
      
        
        <Route path="/project" element={<ProjectPage />} />
   
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
