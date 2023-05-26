import { configureStore } from '@reduxjs/toolkit'
import viewHomeChart from './features/view/home/chart'
// import viewChart from './features/view/chart'
import viewChartSelectData from './features/view/chart/selectData'
// import viewChartSelectChart from './features/view/chart/selectChart'

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
