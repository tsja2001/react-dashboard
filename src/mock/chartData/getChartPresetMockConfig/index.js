import areaChartPreset from './areaChartPreset'
import columnChartPreset from './columnChartPreset'
import lineChartPreset from './lineChartPreset'
import barChartPreset from './barChartPreset'
import pieChartPreset from './pieChartPreset'
import { featNetwork } from '@/mock/feakNetwork'

export const getChartPresetMockConfig = async () => {
  return await featNetwork([
    {
      groupLabel: '折线图',
      groupType: ['line'],
      groupItem: lineChartPreset
    },
    {
      groupLabel: '柱状图',
      groupType: ['column'],
      groupItem: columnChartPreset
    },
    {
      groupLabel: '条形图',
      groupType: ['bar'],
      groupItem: barChartPreset
    },
    {
      groupLabel: '面积图',
      groupType: ['area'],
      groupItem: areaChartPreset
    },
    {
      groupLabel: '饼图',
      groupType: ['pie'],
      groupItem: pieChartPreset
    }
  ])
}
