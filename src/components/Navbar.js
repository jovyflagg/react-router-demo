import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
        {/* <h4 className='nav--logo-text'>Route Demo</h4> */}
        <div className="nav--link"></div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
    </nav>
  )
}
