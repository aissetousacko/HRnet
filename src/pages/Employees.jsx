import React, { useState } from 'react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import Table from '../components/Table'

/**
 * Display all the employees
 * @returns {JSX.Element} Employees component
 */
const Employees = () => {
  const employees = useSelector((state) => state.employees.employees)
  const ref = useRef()
  const [data, setData] = useState(employees)

  const searchBar = (value) => {
    const datas = []
    if (value !== '') {
      const filteredData = data.filter((employee) =>
        employee.firstName.toLowerCase().includes(value.toLowerCase())
      )

      datas.push(filteredData)

      renderData(...datas)
    } else {
      renderData()
    }

    // When the input change
    function renderData(datas = []) {
      if (datas.length === 0 && ref.current.value === '') {
        setData(employees)
      } else {
        setData(datas)
      }
    }
  }

  return (
    <div className="employees">
      <h1>Current Employees</h1>
      <div className="employees__searchbar">
        <label htmlFor="search">Search : </label>
        <input
          id="search"
          name="search"
          type="search"
          ref={ref}
          onChange={(e) => searchBar(e.target.value)}
        />
      </div>
      <Table data={data} />
    </div>
  )
}

export default Employees
