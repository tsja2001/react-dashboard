import { memo } from 'react'

import { Input, Switch } from 'antd'

const DynamicChartCpn = (props) => {
  const { is, children, title, ...rest } = props

  return <h2>dyma</h2>

  // if (is === 'Input') {
  //   return <Input {...rest}>{children}</Input>
  // } else if (is === 'Switch') {
  //   return <Switch {...rest}>{children}</Switch>
  // }
}

export default memo(DynamicChartCpn)
