import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

/**
 * Display the navigation bar
 * @returns {JSX.Element} Navbar component
 */
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <div className="navbar__links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Create Employee
        </NavLink>
        <NavLink
          to="/employees"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          View Current Employees
        </NavLink>
      </div>
      <h1>HRNet</h1>
    </div>
  )
}

export default Navbar
