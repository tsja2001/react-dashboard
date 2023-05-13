import { configureStore } from '@reduxjs/toolkit'
import viewHomeChart from './features/view/home/chart'
import viewChart from './features/view/chart'
import viewChartSelectData from './features/view/chart/selectData'

const store = configureStore({
  reducer: {
    viewHomeChart,
    viewChart,
    viewChartSelectData
  }
})

export default store
