import "./Footer.css"
import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import {FaHome,FaMailBulk,FaPhone,FaInstagram,FaLinkedin,FaTwitter} from "react-icons/fa"
export default function Footer() {
  return (
    <div className="footer"> 
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={30} style={{color:"#fff",marginRight:"2rem"}}/>
                <div>
                    <p>Bedia,Khargone(M.P.)</p>
                    <p>India</p>
                </div>
            </div>
            <div className="phone">
                <h4><FaPhone size={25} style={{color:"#fff",marginRight:"2rem"}}/>  +91 78793 36446</h4>
            </div>
            <div className="email">
            <h4><FaMailBulk size={25} style={{color:"#fff",marginRight:"2rem"}}/> gopalapatel1234@gmial.com</h4>
            </div>
        </div>
        <div className="right">
            <h4 style={{paddingBottom:"2rem"}}>About me</h4>
            <div className="temp">
              <p className="p2">I'm Gopala a</p>
              <p className="p2" style={{"color": "rgb(7,175,161)","fontWeight":"bolder","padding":"5px"}}>
              <Typewriter
              options={{
                strings: [
                  "Competitive Programmer",
                  "Coder",
                  "Web developer",
                  "Quick Learner",
                ],
                autoStart: true,
                loop: true,
              }}/>
              </p>
            </div>

            <p style={{fontSize:"1.2rem"}}>I am a final year Undergrad Student at National Institute of technology,patna pursuing B.Tech in Computer Science and engineering. I am a passionate programmer with a curious mind who enjoys solving a complex and challenging real-world problems. Always strive to bring 100% to the work I do. I have worked on technologies like C++, C, HTML5, CSS, JavaScript,ReactJS,BootStrap,Tailwind.</p>
            <div className="social">
                <div>
                  <a href="https://www.instagram.com/gopala_patel/" target="_blank"><FaInstagram size={30} style={{color:"#fff"}}/></a>
                </div>
                <div>
                  <a href="https://twitter.com/GopalaPatel6?t=COQaeNKzfxINySTCF-8OSA&s=08" target="_blank"><FaTwitter size={30} style={{color:"#fff"}}/></a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/gopala142002/" target="_blank"><FaLinkedin size={30} style={{color:"#fff"}}/></a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
