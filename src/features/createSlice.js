import { createSlice } from '@reduxjs/toolkit'
import { mockedData } from '../data/mocked-data'

const initialState = {
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
