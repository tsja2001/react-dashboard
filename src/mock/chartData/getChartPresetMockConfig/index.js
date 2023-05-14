import areaChartPreset from './areaChartPreset'
import lineChartPreset from './lineChartPreset'
import { featNetwork } from '@/mock/feakNetwork'

export const getChartPresetMockConfig = async () => {
  return await featNetwork([lineChartPreset, areaChartPreset])
}
