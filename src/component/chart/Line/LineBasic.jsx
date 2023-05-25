import { memo } from 'react'
import { Line } from '@ant-design/plots'

const LineBasic = (props) => {
  const { chartData } = props

  const config = {
    data: chartData,
    padding: 'auto',
    xField: 'year',
    yField: 'value',
    xAxis: {
      tickCount: 10
    }
  }

  return <Line {...config} />
}

export default memo(LineBasic)
