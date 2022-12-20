import { createSlice } from '@reduxjs/toolkit'
import { mockedData } from '../data/mocked-data'

const initialState = {
  // employees: [
  //   // {
  //   //   id: 1,
  //   //   firstName: 'John',
  //   //   lastName: 'Doe',
  //   //   birthDate: '1976-10-18',
  //   //   startDate: '2022-12-17',
  //   //   street: '35, selfy road',
  //   //   city: 'Clearwater',
  //   //   state: 'Minnesota',
  //   //   zipCode: '56450',
  //   //   department: 'Engineering',
  //   // },
  // ],
  employees: mockedData,
  isSuccess: false,
}

export const createEmployeeSlice = createSlice({
  name: 'create',
  initialState,
  reducers: {
    submitForm: (state, action) => {
      state.employees.push(action.payload)
      state.isSuccess = true
    },
  },
})

export const { submitForm } = createEmployeeSlice.actions
export default createEmployeeSlice.reducer
