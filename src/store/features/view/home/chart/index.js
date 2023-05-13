import { cardSizeConfig } from '@/config/cardSizeConfig'
import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'view/home/chart',
  initialState: {
    // 卡片尺寸配置
    cardSize: {
      value: 'small',
      label: '三列',
      colSpan: 8,
      height: '35vh'
    }
  },
  reducers: {
    // 修改列数
    changeColumn(state, action) {
      state.cardSize = action.payload
    }
  }
})

export const { changeColumn } = slice.actions
export default slice.reducer
