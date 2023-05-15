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
      groupType: 'Line',
      groupItem: lineChartPreset
    },
    {
      groupLabel: '柱状图',
      groupType: 'Column',
      groupItem: columnChartPreset
    },
    {
      groupLabel: '条形图',
      groupType: 'Bar',
      groupItem: barChartPreset
    },
    {
      groupLabel: '面积图',
      groupType: 'Area',
      groupItem: areaChartPreset
    },
    {
      groupLabel: '饼图',
      groupType: 'Pie',
      groupItem: pieChartPreset
    }
  ])
}
