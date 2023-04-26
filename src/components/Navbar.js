import React from 'react'
import { NavLink } from 'react-router-dom'
import menu from "./../index.css";

export const Navbar = () => {
  return (
    <nav className='nav--main'>
        {/* <h4 className='nav--logo-text'>Route Demo</h4> */}
        <div className="nav--link"></div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/services'>Services</NavLink>
        
    </nav>
  )
}
