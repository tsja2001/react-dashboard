import { getChartMockData } from '@/mock/chartData/getChartMockData'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const slice = createSlice({
  name: 'view/chart/selectData',
  initialState: {
    // 此数据, 应当派发异步action, 从后端获取
    selectedDataOptions: [
      {
        label: '多折线图mock数据',
        value: 'chart_id_4'
      },
      {
        label: '折线图mock数据',
        value: 'chart_id_1'
      },
      {
        label: '饼图mock数据',
        value: 'chart_id_2'
      },
      {
        label: '柱状图mock数据',
        value: 'chart_id_3'
      }
    ],
    currentChartId: null,
    // 异步获取得到的, 当前选中的chart数据
    currentChartData: null
  },
  reducers: {
    setCurrentChartData(state, action) {
      state.currentChartData = action.payload
    },
    setcurrentChartId(state, action) {
      state.currentChartId = action.payload
    }
  }
})

// 根据chartId, 获取对应的mock数据
export const fetchChartDataById = createAsyncThunk(
  'view/chart/selectData/fetchSelectedData',
  async (chartId, { dispatch }) => {
    const res = await getChartMockData(chartId)
    dispatch(setCurrentChartData(res))
  }
)

export const { setCurrentChartData, setcurrentChartId } = slice.actions
export default slice.reducer
