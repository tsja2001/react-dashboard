import { featNetwork } from '../feakNetwork'
import data1_basic from './data1_basic'

export const getCreatedCharts = async () => {
  const res = [...data1_basic]
  return await featNetwork(res)
}
