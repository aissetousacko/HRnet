import React from 'react'
import { Link } from 'react-router-dom'

const Employees = () => {
  return (
    <div className="employees">
      <h1>Current Employees</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Employees
