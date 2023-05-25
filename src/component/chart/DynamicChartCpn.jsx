import { memo } from 'react'

import { Input, Switch } from 'antd'
import { Area, Line } from '@ant-design/charts'

const DynamicChartCpn = (props) => {
  const { chartType, ...rest } = props

  console.log('props', props)

  if (chartType === 'Line') {
    return <Line {...rest}></Line>
  } else if (chartType === 'Area') {
    return <Area {...rest}></Area>
  } else {
    return <h2>aaaaa</h2>
  }
}

export default memo(DynamicChartCpn)
