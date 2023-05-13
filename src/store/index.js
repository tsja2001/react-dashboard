import { configureStore } from '@reduxjs/toolkit'
import chartSlice from './features/view/home/chart'

const store = configureStore({
  reducer: {
    chart: chartSlice
  }
})

export default store
