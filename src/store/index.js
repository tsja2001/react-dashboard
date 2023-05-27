import { configureStore } from '@reduxjs/toolkit'
import viewHomeChart from './features/view/home/chart'
import viewChartSelectData from './features/view/chart'

const store = configureStore({
  reducer: {
    viewHomeChart,
    viewChartSelectData
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store
