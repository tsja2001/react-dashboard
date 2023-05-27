import { configureStore } from '@reduxjs/toolkit'
import viewHomeChart from './features/view/home/chart'
import viewChart from './features/view/chart'

const store = configureStore({
  reducer: {
    viewHomeChart,
    viewChart
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store
