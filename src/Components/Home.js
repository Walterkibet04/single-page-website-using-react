import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeImg from "../Images/computer-1.jpg"
import './CSS/HomeAbout.css'
import Same from './Same'
const Home = () => {
  return (
    <>
      <Same title={"Build your online presence"} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam totam, nihil in minima dolorum quibusdam obcaecati! Unde ex perspiciatis dolorem!" 
         imgsrc ={HomeImg}      
      />

    </>
  )
}

export default Home