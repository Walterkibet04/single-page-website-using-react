import React from 'react'
import { NavLink } from 'react-router-dom'
import "./CSS/ContactStyle.css"
const Contact = () => {
  return (
    <>
      <h1>Contact us</h1>
      <form className='contact'>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Enter your name'/>
        </div>
        <div>
          <label htmlFor="name">Email</label>
          <input type="email" placeholder='Enter your email'/>
        </div>
        <div>
          <label htmlFor="name">Password</label>
          <input type="Password" placeholder='Enter your password'/>
        </div>
        <div>
          <label htmlFor="name">phone no</label>
          <input type="text" placeholder='Enter your phone'/>
        </div>
        <div className="btn-box">
            <div className="btn">
            <NavLink to="/" className="read-more" >Submit</NavLink>
            </div>
          </div>
      </form>
    </>
  )
}

export default Contact
