import { configureStore } from '@reduxjs/toolkit'
import viewHomeChart from './features/view/home/chart'
import viewChart from './features/view/chart'
import global from './features/global'

const store = configureStore({
  reducer: {
    global,
    viewHomeChart,
    viewChart
  }
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware({
  // serializableCheck: false
  // })
})

export default store
