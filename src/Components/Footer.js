import React from 'react'
// import SearchIcon from '@mui/icons-material/Search';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import CallIcon from '@mui/icons-material/Call';
import "../Components/CSS/Footerstyle.css"
const Footer = () => {
  return (
    <>
        <footer>
             <div className="container container-flex">
                <div className="icons">
                     {/* <SearchIcon className='icon'/>
                     <PermIdentityIcon className='icon'/>
                     <CallIcon className='icon'/>
                     <CallIcon className='icon'/> */}
                </div>
                <div className="line">
                    <hr/>
                    <hr/>
                </div>
                <div className='copyright'>
                    <p>All rights reserved &copy;</p>
                    <p>Created by Walter kibet</p>
                </div>
             </div>
        </footer> 
    </>
  )
}

export default Footer