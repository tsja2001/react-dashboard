import areaChartPreset from './areaChartPreset'
import columnChartPreset from './columnChartPreset'
import lineChartPreset from './lineChartPreset'
import barChartPreset from './barChartPreset'
import { featNetwork } from '@/mock/feakNetwork'

export const getChartPresetMockConfig = async () => {
  return await featNetwork([
    lineChartPreset,
    areaChartPreset,
    columnChartPreset,
    barChartPreset
  ])
}
