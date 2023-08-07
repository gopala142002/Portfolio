import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'
export default function About() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT" para="I'm a friendly Front-End Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}
