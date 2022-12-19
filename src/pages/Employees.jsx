import React from 'react'
// import { Link } from 'react-router-dom'
import Table from '../components/Table'

const Employees = () => {
  return (
    <div className="employees">
      <h1>Current Employees</h1>
      <Table />
      {/* <Link to="/">Home</Link> */}
    </div>
  )
}

export default Employees
