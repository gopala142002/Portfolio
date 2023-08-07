import "./Form.css"
import React from 'react'

export default function Form() {
  return (
    <div>
      <form action="https://formsubmit.co/fab16f515cac58d62a94dbc27b5450a4" method="POST" className="form">
        <label htmlFor="">Your Name</label>
        <input type="text" name="Name"></input>
        <label htmlFor="">Email</label>
        <input type="email" name="email"></input>
        <label htmlFor="">Subject</label>
        <input type="text" name="subject"></input>
        <label htmlFor="">Message</label>
        <textarea rows="6" placeholder="Type Your Message here" name="Message"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}
