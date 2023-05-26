import { memo } from 'react'
import { Typography } from 'antd'
import { Area, Bar, Column, Line, Pie } from '@ant-design/charts'

const DynamicChartCpn = (props) => {
  const { chartType, title, description, ...rest } = props

  let Chart = <h2>暂无图表数据</h2>

  if (chartType === 'Line') {
    Chart = <Line {...rest}></Line>
  } else if (chartType === 'Area') {
    Chart = <Area {...rest}></Area>
  } else if (chartType === 'Column') {
    Chart = <Column {...rest}></Column>
  } else if (chartType === 'Bar') {
    Chart = <Bar {...rest}></Bar>
  } else if (chartType === 'Pie') {
    Chart = <Pie {...rest}></Pie>
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
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
