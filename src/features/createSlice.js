import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employee: [
    // fake datas
    {
      firstName: 'John',
      lastName: 'Doe',
      birthDate: '1976-10-18',
      startDate: '2022-12-17',
      department: 'engineering',
      street: '35, selfy road',
      city: 'Clearwater',
      state: 'Minnesota',
      zipCode: '56450',
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      birthDate: '1979-01-23',
      startDate: '2022-12-17',
      department: 'marketing',
      street: '35, long street',
      city: 'Chicago',
      state: 'Illinois',
      zipCode: '80548',
    },
  ],
}

export const createEmployeeSlice = createSlice({
  name: 'create',
  initialState,
  reducers: {
    submitForm: (state, action) => {
      state.employee.push(action.payload)
    },
  },
})

export const { submitForm } = createEmployeeSlice.actions
export default createEmployeeSlice.reducer
