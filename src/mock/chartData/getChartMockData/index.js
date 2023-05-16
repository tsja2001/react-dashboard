import lineData from './lineData'
import seriesLineData from './seriesLineData'
import columnData from './column'
import seriesColumnData from './seriesColumnData'
import pieData from './pieData'
import { featNetwork } from '@/mock/feakNetwork'

export const getChartMockIndex = async () => {
  const chartList = [
    lineData,
    seriesColumnData,
    pieData,
    seriesLineData,
    columnData
  ]

  const res = chartList.map((item) => {
    return {
      label: item.label,
      value: item.id
    }
  })
  return await featNetwork(res)
}
export const getChartMockData = async (chartId) => {
  const chartList = [
    lineData,
    seriesLineData,
    columnData,
    seriesColumnData,
    pieData
  ]

  const chartData = chartList.find((item) => item.id === chartId)

  return await featNetwork(chartData)
}
