import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import WorkCard from '../components/WorkCard'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <WorkCard/>
      <Footer/>
    </div>
  )
}
