import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeImg from "../Images/computer-1.jpg"
const Same = (props) => {
  return (
    <>
      <div className="main-section">
        <div className="content-box">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <div className="btn-box">
            <div className="btn">
            <NavLink to="/contact" className="read-more" >Contact us</NavLink>
            </div>
          </div>
        </div>
        <div className="image-container">
            <img src={props.imgsrc} alt="home"/>
        </div>
      </div>
    </>
  )
}

export default Same