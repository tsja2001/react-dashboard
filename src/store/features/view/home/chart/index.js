import { cardSizeConfig } from '@/config/cardSizeConfig'
import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'view/home/chart',
  initialState: {
    // 卡片尺寸配置
    cardSize: cardSizeConfig['small']
  },
  reducers: {
    // 修改列数
    changeColumn(state, action) {
      state.cardSize = cardSizeConfig[action.payload]
    }
  }
})

export const { changeColumn } = slice.actions
export default slice.reducer
