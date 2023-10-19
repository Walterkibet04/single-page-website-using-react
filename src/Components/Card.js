import React from 'react'
import Img1 from "../Images/apple.jpg"
import { NavLink } from 'react-router-dom'
import "./CSS/ServiceStyle.css"
const Card = (props) => {
  return (
    <>
      <div className="card">
          <h2>{props.title1}</h2>
          <img src={Img1} alt="" className='serviceImg'/>
          <p>{props.desc1}</p>
          <div className="btn-box">
            <div className="btn">
            <NavLink to="/contact" className="read-more" >{props.button}</NavLink>
            </div>
          </div>
        </div>
    </>
  )
}

export default Card
