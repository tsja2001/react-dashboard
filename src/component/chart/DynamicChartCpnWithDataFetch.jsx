import { memo, useEffect, useState } from 'react'

import { getChartMockData } from '@/mock/getChartMockData'
import DynamicChartCpn from './DynamicChartCpn'

// 封装动态组表组件DynamicChartCpn，使其能够根据数据源id获取数据
const DynamicChartCpnWithDataFetch = (props) => {
  const { dataId, selfProps, ...chartConfig } = props
  const [chartData, setChartData] = useState({})

  useEffect(() => {
    const fetch = async () => {
      const chartDataRes = await getChartMockData(dataId)
      setChartData(chartDataRes.chartConfig)
    }

    fetch()
  }, [dataId])

  return (
    <div style={{ width: '100%', height: '100%' }} {...props.selfProps}>
      <DynamicChartCpn {...chartData} {...chartConfig} />
    </div>
  )
}

export default memo(DynamicChartCpnWithDataFetch)
