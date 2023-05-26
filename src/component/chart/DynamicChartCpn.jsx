import { memo } from 'react'
import { Typography } from 'antd'
import { Area, Column, Line } from '@ant-design/charts'

const DynamicChartCpn = (props) => {
  const { chartType, title, description, ...rest } = props

  console.log('props', props)

  let Chart = <h2>暂无图表数据</h2>

  console.log('----------------------------')

  if (chartType === 'Line') {
    Chart = <Line {...rest}></Line>
  } else if (chartType === 'Area') {
    Chart = <Area {...rest}></Area>
  } else if (chartType === 'Column') {
    Chart = <Column {...rest}></Column>
  }

  return (
    <div>
      <div className="title" style={{ paddingBottom: '5px' }}>
        {title && title.visible && (
          <Typography.Title level={title.size ?? 3} style={{ margin: 0 }}>
            {title.text}
          </Typography.Title>
        )}
        {description && description.visible && (
          <Typography.Text strong={description.strong} style={{ margin: 0 }}>
            {description.text}
          </Typography.Text>
        )}
      </div>
      {Chart}
    </div>
  )
}

export default memo(DynamicChartCpn)
