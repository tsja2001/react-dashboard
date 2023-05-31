import { getChartMockData, getChartMockIndex } from '@/mock/getChartMockData'
import { findCreateChartConfigById } from '@/mock/getCreatedCharts'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const slice = createSlice({
  name: 'view/chart/selectData',
  initialState: {
    // 此数据, 应当派发异步action, 从后端获取
    selectedDataOptions: [],
    currentChartId: null,
    // 异步获取得到的, 当前选中的chart数据
    currentChartData: null,
    // 图表选择页面header 卡片大小的配置
    cardSize: {
      value: 'small',
      label: '三列',
      colSpan: 8,
      height: '35vh'
    }
  },
  reducers: {
    setSelectedDataOptions(state, action) {
      state.selectedDataOptions = action.payload
    },
    setCurrentChartData(state, action) {
      state.currentChartData = action.payload
    },
    setcurrentChartId(state, action) {
      state.currentChartId = action.payload
    },
    // 修改列数
    changeColumn(state, action) {
      state.cardSize = action.payload
    }
  }
})
// 获取chart数据的索引, 用于展示在select组件中
export const fetchSelectOptions = createAsyncThunk(
  'view/chart/selectData/fetchSelectOptions',
  async (props, { dispatch }) => {
    const res = await getChartMockIndex()
    dispatch(setSelectedDataOptions(res))
  }
)

// 根据chartId, 获取对应的mock数据
export const fetchChartDataById = createAsyncThunk(
  'view/chart/selectData/fetchSelectedData',
  async (chartId, { dispatch }) => {
    const res = await getChartMockData(chartId)
    dispatch(setCurrentChartData(res))

    return res
  }
)

// 根据createChartConfigId, 获取对应的mock数据
export const {
  setCurrentChartData,
  setcurrentChartId,
  setSelectedDataOptions,
  changeColumn
} = slice.actions
export default slice.reducer
