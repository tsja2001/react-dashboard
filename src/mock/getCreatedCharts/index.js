import { featNetwork } from '../feakNetwork'
import data1_basic from './data1_basic'

export const getCreatedCharts = async () => {
  const res = [...data1_basic]
  return await featNetwork(res)
}

export const findCreateChartConfigById = async (id) => {
  const res = data1_basic.find((item) => item._id === id)
  return await featNetwork(res)
}
