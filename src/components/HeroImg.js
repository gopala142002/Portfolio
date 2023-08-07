import "./HeroImg.css"
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import {Link} from "react-router-dom"
import Typewriter from "typewriter-effect";
export default function heroImg() {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="bgimg"/>
        </div>
        <div className="content">
            <p className="p1">Hello , my name is</p>
            <h1>Gopala Patel</h1>
            <div className="temp">
              <p className="p2">And I'm a</p>
              <p className="p2" style={{"color": "rgb(7,175,161)","fontWeight":"bolder","padding-left":"5px"}}>
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
            <div>
                <Link to='/project' className="btn">PROJECTS</Link>
                <Link to='/contact' className="btn btn-light">CONTACT</Link>
            </div>
        </div>
    </div>
  )
}
