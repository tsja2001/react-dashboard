import lineData from '@/mock/chartData/getChartMookData/lineData'
import pieData from '@/mock/chartData/getChartMookData/pieData'
import columnData from '@/mock/chartData/getChartMookData/columnData'
import { featNetwork } from '@/mock/feakNetwork'

export const getChartMockData = async (chartId) => {
  if (chartId === 'chart_id_1') {
    return await featNetwork(lineData)
  }
  if (chartId === 'chart_id_2') {
    return await featNetwork(pieData)
  }
  if (chartId === 'chart_id_3') {
    return await featNetwork(columnData)
  }
}
