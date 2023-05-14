import { getChartPresetMockConfig } from '@/mock/chartData/getChartPresetMockConfig'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const slice = createSlice({
  name: 'view/chart/selectChart',
  initialState: {
    allPresetChartConfig: [],
    availablePresetChartConfig: []
  },
  reducers: {
    setAllPresetChartConfig(state, action) {
      state.allPresetChartConfig = action.payload
    },
    // 根据用户选择数据源, 获取可以用的预设chart配置
    setAvailablePresetChartConfig(state, { payload }) {
      const { allPresetChartConfig } = state

      const availablePresetChartConfig = allPresetChartConfig.filter((item) => {
        return payload.includes(item.type)
      })

      state.availablePresetChartConfig = availablePresetChartConfig
    }
  }
})

// 获取全部的预设chart配置
export const fetchAllPresetChartConfig = createAsyncThunk(
  'view/chart/selectChart/fetchAllPresetChartConfig',
  async (props, { dispatch }) => {
    const res = await getChartPresetMockConfig()
    console.log('res', res)
    dispatch(setAllPresetChartConfig(res))
  }
)

export const {
  setCurrentChartData,
  setcurrentChartId,
  setAllPresetChartConfig,
  setAvailablePresetChartConfig
} = slice.actions
export default slice.reducer
