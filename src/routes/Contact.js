import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'
export default function Contact() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CONTACT" para="Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}
