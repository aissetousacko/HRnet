import React, { useState } from 'react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import Table from '../components/Table'

const Employees = () => {
  const employees = useSelector((state) => state.employees.employees)
  const ref = useRef()
  const [data, setData] = useState(employees)

  const searchBar = (value) => {
    // console.log('inputValue: ', value)
    const datas = []
    if (value !== '') {
      const filteredData = data.filter((employee) =>
        employee.firstName.toLowerCase().includes(value.toLowerCase())
      )

      // console.log('filteredData', filteredData)
      datas.push(filteredData)
      // console.log('datas after push', ...datas)

      renderData(...datas)
    } else {
      renderData()
    }

    //* When the input change
    function renderData(datas = []) {
      if (datas.length === 0 && ref.current.value === '') {
        setData(employees)
      } else {
        setData(datas)
      }
    }

    // const filteredItems = data.filter((data) => {
    //   console.log(
    //     'data in filter',
    //     data
    //   )
    //   return (
    //     data.firstName.toLowerCase().includes(value.toLowerCase()) ||
    //     data.lastName.toLowerCase().includes(value.toLowerCase()) ||
    //     data.startDate.toLowerCase().includes(value.toLowerCase()) ||
    //     data.department.toLowerCase().includes(value.toLowerCase()) ||
    //     data.birthDate.toLowerCase().includes(value.toLowerCase()) ||
    //     data.street.toLowerCase().includes(value.toLowerCase()) ||
    //     data.city.toLowerCase().includes(value.toLowerCase()) ||
    //     data.state.toLowerCase().includes(value.toLowerCase()) ||
    //     data.codeZip.toLowerCase().includes(value.toLowerCase())
    //   )
    // })
    // console.log('filteredItems: ', filteredItems)
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
