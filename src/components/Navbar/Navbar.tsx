import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='navbar d-flex justify-content-between' >
        <div className="navbar_logo d-flex align-items-center justify-content-center ">
            <img src='../../assets/smallLogo.png' style={{width: '257px', height: '46px'}} alt='SmallLogo'/>
            {/* <span>Snap.AI</span> */}
        </div>
        <div className="navbar_links d-flex align-items-center justify-content-left ">
            <NavLink to='/myproj' style={{textDecoration: 'none'}}>
              <span >Мої проекти</span>
            </NavLink>
            <NavLink to='/home' style={{textDecoration: 'none'}}>
              <span >Усі проекти</span>
            </NavLink>
            <NavLink to='/about' style={{textDecoration: 'none'}}>
              <span >Про Snap.AI</span>
            </NavLink>
            
        </div>
        <div className="navbar_profile d-flex align-items-center  justify-content-center ">
            <img src='../../assets/profile.png' style={{width: '20px', height: '20px'}} />
            <span className='ms-3' >Mariia Volkova</span>
        </div>
    </div>
  )
}

export default Navbar