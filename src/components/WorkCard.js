import "./WorkCard.css";
import React from 'react'
import { NavLink } from "react-router-dom";
import project1 from "../assets/to-do.png"
import project2 from "../assets/sorting-visualizer.png";
import project3 from "../assets/tic-tac-toe.png";
export default function workCard(props) {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={project1} alt={project1}/>
          <h2 className="project-title">To-Do List</h2>
          <div className="pro-details">
            <p>The Todo List Application is a user-friendly and intuitive task management tool designed to help individuals and teams organize their daily tasks, prioritize activities, and enhance productivity. The application provides a seamless and efficient way to keep track of various tasks.</p>
            <div className="pro-btns">
              <NavLink to="https://gopala142002.github.io/TO-DO-List/" className="btn">View</NavLink>
              <NavLink to="https://github.com/gopala142002/TO-DO-List" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={project2} alt={project2}/>
          <h2 className="project-title">Sorting-Visualizer</h2>
          <div className="pro-details">
            <p>The Sorting Visualizer Application is an interactive and educational tool designed to help users understand and visualize various sorting algorithms. Sorting algorithms are fundamental concepts in computer science, and this application provides a dynamic way to explore how different algorithms work.</p>
            <div className="pro-btns">
              <NavLink to="https://gopala142002.github.io/Sorting-Visualizer/" className="btn">View</NavLink>
              <NavLink to="https://github.com/gopala142002/Sorting-Visualizer" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={project3} alt={project3}/>
          <h2 className="project-title">Tic-Tac-Toe</h2>
          <div className="pro-details">
            <p>The Tic-Tac-Toe Project involves the creation of a classic two-player game that challenges participants to strategically place their symbols on a 3x3 grid with the objective of forming a horizontal, vertical, or diagonal line of their symbol before their opponent does.</p>
            <div className="pro-btns">
              <NavLink to="http://tictactoebygp.surge.sh/" className="btn">View</NavLink>
              <NavLink to="https://github.com/gopala142002/tictactoe-game" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
