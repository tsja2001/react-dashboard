import { createSlice } from '@reduxjs/toolkit'
import lineData from '@/mock/chartData/lineData'
import pieData from '@/mock/chartData/pieData'
import columnData from '@/mock/chartData/columnData'

const slice = createSlice({
  name: 'view/chart/selectData',
  initialState: {
    selectableData: [lineData, pieData, columnData],
    selectedData: null
  },
  reducers: {
    setStepsCurrent(state, action) {
      state.steps.current = action.payload
    },
    setStepsComponentConfig(state, action) {
      state.steps.componentConfig = action.payload
    }
  }
})

export const { setStepsCurrent, setStepsComponentConfig } = slice.actions
export default slice.reducer
