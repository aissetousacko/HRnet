import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import { useSelector } from 'react-redux'
import { states } from '../data/states'

const formatData = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const rowsData = (employee) => {
  const id = employee.id
  const firstName = formatData(employee.firstName)
  const lastName = formatData(employee.lastName)
  const city = formatData(employee.city)
  const startDate = employee.startDate
  const department = formatData(employee.department)
  const birthDate = employee.birthDate
  const zipCode = employee.zipCode
  const street = employee.street

  const state = states
    .map((st) => {
      if (st.name.includes(employee.state)) {
        return st.abbreviation
      }
    })
    .filter((st) => st !== undefined)
    .toString()

  return {
    id,
    firstName,
    lastName,
    startDate,
    department,
    birthDate,
    street,
    city,
    state,
    zipCode,
  }
}

const columns = [
  {
    field: 'firstName',
    headerName: 'First Name',
    align: 'center',
  },
  {
    field: 'lastName',
    headerName: 'Last Name',

    align: 'center',
  },
  {
    field: 'startDate',
    headerName: 'Start Date',
    align: 'center',
  },
  {
    field: 'department',
    headerName: 'Department',
    align: 'center',
  },
  {
    field: 'birthDate',
    headerName: 'Birth Date',
    align: 'center',
  },

  {
    field: 'street',
    headerName: 'Street',
    align: 'center',
  },
  { field: 'city', headerName: 'City', align: 'center' },
  { field: 'state', headerName: 'State', align: 'center' },
  {
    field: 'zipCode',
    headerName: 'Zip Code',
    align: 'center',
  },
]

const Table = () => {
  const [rowsGridData, setRowsGridData] = useState([])
  const employees = useSelector((state) => state.employees.employees)

  useEffect(() => {
    if (employees.length > 0) {
      console.log('rowsGridData: ', rowsGridData)

      employees.forEach((employee) => {
        console.log('employee: ', employee)
        setRowsGridData((rowsGridData) => [...rowsGridData, rowsData(employee)])
      })
    }
  }, [employees])

  console.log('rowsGridData after useEffect', rowsGridData)

  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rowsGridData}
        columns={columns}
        getRowId={(row) => row.id}
      />
    </Box>
  )
}

export default Table
