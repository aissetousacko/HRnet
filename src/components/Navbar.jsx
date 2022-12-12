import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <div className="navbar__links">
        <Link to="/" className="active">
          Create Employee
        </Link>
        <Link to="/employees">View Current Employees</Link>
      </div>
      <h1>HRNet</h1>
    </div>
  )
}

export default Navbar
