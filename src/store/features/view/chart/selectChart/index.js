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
    setAvailablePresetChartConfig(state, action) {
      const requireChartType = action.payload
      const { allPresetChartConfig } = state
      const availablePresetChartConfig = []
      allPresetChartConfig.forEach((configGroupItem) => {
        const currentGroupType = configGroupItem.groupType

        // 如果当前所需图表类型, 包含当前组类型, 则直接添加,
        // 比如requireChartType: [‘Pie’], groupType: ‘Pie’
        if (requireChartType.includes(currentGroupType)) {
          availablePresetChartConfig.push(configGroupItem)
          return
        }

        // 如果当前所需图表类型, 不包含当前组类型, 则判断当前组类型下的子类型是否包含在所需图表类型中
        // 比如requireChartType: [‘Column:Single’], currentGroupType: 'Column'
        const requireTypeInCurrentGroupType = requireChartType.filter(
          (item) => {
            return item.split(':')[0] === currentGroupType
          }
        )

        // 添加当前组类型下的子类型
        if (requireTypeInCurrentGroupType.length > 0) {
          const { groupItem } = configGroupItem
          const requireGroupItemInCurrentGroup = groupItem.filter((item) => {
            return requireTypeInCurrentGroupType.includes(item.type)
          })

          availablePresetChartConfig.push({
            groupLabel: configGroupItem.groupLabel,
            groupType: currentGroupType,
            groupItem: requireGroupItemInCurrentGroup
          })
        }
      })

      console.log(
        'availablePresetChartConfig',
        JSON.parse(JSON.stringify(availablePresetChartConfig))
      )

      state.availablePresetChartConfig = availablePresetChartConfig
    }
  }
})

// 获取全部的预设chart配置
export const fetchAllPresetChartConfig = createAsyncThunk(
  'view/chart/selectChart/fetchAllPresetChartConfig',
  async (props, { dispatch }) => {
    const res = await getChartPresetMockConfig()
    dispatch(setAllPresetChartConfig(res))
  }
)

// 懒加载全部的预设chart配置
export const loadAllPresetChartConfig = createAsyncThunk(
  'view/chart/selectChart/loadAllPresetChartConfig',
  async (props, { dispatch, getState }) => {
    // 若已经存在数据, 则不加载
    const { allPresetChartConfig } = getState().viewChartSelectChart
    if (allPresetChartConfig.length > 0) return

    const { chartPresetConfig } = await import(
      '@/config/chartPresetConfig/index.js'
    )
    dispatch(setAllPresetChartConfig(chartPresetConfig))
  }
)

export const {
  setCurrentChartData,
  setcurrentChartId,
  setAllPresetChartConfig,
  setAvailablePresetChartConfig
} = slice.actions
export default slice.reducer
