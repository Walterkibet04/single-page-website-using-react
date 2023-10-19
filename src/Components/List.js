import React from 'react'
import Logo from "../Images/Logo.jpg"
import { NavLink } from 'react-router-dom'
// import SearchIcon from '@mui/icons-material/Search';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import CallIcon from '@mui/icons-material/Call';
import './CSS/Liststyle.css'
const List = () => {
  return (
    <>
      <header>
        <div className="container container-flex">
            <div className='logoContainer'>
                <img src={Logo} alt="" className='logo'/>
            </div>
            <nav>
                <div className="list">
                    <NavLink to="/" className="listItem" activeClassName="activeItem">Home</NavLink>
                    <NavLink to="/about" className="listItem" activeClassName="activeItem">About</NavLink>
                    <NavLink to="/services" className="listItem" activeClassName="activeItem">Services</NavLink>
                    <NavLink to="/contact" className="listItem" activeClassName="activeItem">Contact</NavLink>
                    
                </div>
            </nav>
            <div className="icons">
                {/* <SearchIcon className='icon'/>
                <PermIdentityIcon className='icon'/>
                <CallIcon className='icon'/> */}
            </div>
        </div>
      </header>
    </>
  )
}

export default List