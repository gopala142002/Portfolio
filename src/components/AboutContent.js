import "./AboutContent.css"
import React from 'react'
import {Link} from "react-router-dom";
import project2 from "../assets/sorting-visualizer.png";
import project3 from "../assets/tic-tac-toe.png";
import Typewriter from "typewriter-effect";
export default function AboutContent() {
  return (
    <div className="about">
        <div className="left">
            <h2>Who am I?</h2>
            <div className="temp">
              <p className="p2">And I'm a</p>
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
            <Link to='/contact'><button className="btn">Contact</button></Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack-m">
                    <img src={project2} alt="To-Do List" className="img"/>
                </div>
                <div className="img-stack-b">
                    <img src={project3} alt="To-Do List" className="img"/>
                </div>
            </div>
        </div>
    </div>
  )
}
