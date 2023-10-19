import React from 'react'
import { NavLink } from 'react-router-dom'
import AboutImg from "../Images/computer-2.jpg"
import Same from './Same'
const About = () => {
  return (
    <>
      <Same title={"About us"} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam totam, nihil in minima dolorum quibusdam obcaecati! Unde ex perspiciatis dolorem!" 
         imgsrc ={AboutImg}/>
    </>
  )
}

export default About