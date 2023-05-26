import { getCreatedCharts } from '@/mock/getCreatedCharts'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'view/home/chart',
  initialState: {
    // 卡片尺寸配置
    cardSize: {
      value: 'small',
      label: '三列',
      colSpan: 8,
      height: '35vh'
    },
    // 已创建的图表
    createdCharts: []
  },
  reducers: {
    // 修改列数
    changeColumn(state, action) {
      state.cardSize = action.payload
    },
    // 设置已创建的图表
    setCreatedCharts(state, action) {
      state.createdCharts = action.payload
    }
  }
})

// 获取createdChart列表
export const fetchCreatedCharts = createAsyncThunk(
  'view/home/chart/fetchCreatedCharts',
  async (props, { dispatch }) => {
    const res = await getCreatedCharts()
    dispatch(setCreatedCharts(res))
  }
)

export const { changeColumn, setCreatedCharts } = slice.actions
export default slice.reducer
