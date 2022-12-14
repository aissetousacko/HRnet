import { configureStore } from '@reduxjs/toolkit'
import createReducer from '../features/createSlice'

export const store = configureStore({
  reducer: {
    create: createReducer,
  },
})
