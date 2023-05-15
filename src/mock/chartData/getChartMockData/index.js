import lineData from './lineData'
import seriesLineData from './seriesLineData'
import columnData from './column'
import seriesColumnData from './seriesColumnData'
import pieData from './pieData'
import { featNetwork } from '@/mock/feakNetwork'

export const getChartMockData = async (chartId) => {
  const chartList = [
    lineData,
    seriesLineData,
    columnData,
    seriesColumnData,
    pieData
  ]

  const chartData = chartList.find((item) => item.id === chartId)

  console.log('chartData', chartData)

  return await featNetwork(chartData)
}
