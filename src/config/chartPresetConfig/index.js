import areaChartPreset from './areaChartPreset'
import columnChartPreset from './columnChartPreset'
import lineChartPreset from './lineChartPreset'
import barChartPreset from './barChartPreset'
import pieChartPreset from './pieChartPreset'

// 用于存放图表预设配置
export const chartPresetConfig = [
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
]

// export const getChartPresetMockConfig = async () => {
//   return await featNetwork([
//     {
//       groupLabel: '折线图',
//       groupType: 'Line',
//       groupItem: lineChartPreset
//     },
//     {
//       groupLabel: '柱状图',
//       groupType: 'Column',
//       groupItem: columnChartPreset
//     },
//     {
//       groupLabel: '条形图',
//       groupType: 'Bar',
//       groupItem: barChartPreset
//     },
//     {
//       groupLabel: '面积图',
//       groupType: 'Area',
//       groupItem: areaChartPreset
//     },
//     {
//       groupLabel: '饼图',
//       groupType: 'Pie',
//       groupItem: pieChartPreset
//     }
//   ])
// }
