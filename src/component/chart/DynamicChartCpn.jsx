import { memo, useRef, useState } from 'react'
import { Typography } from 'antd'
import { Area, Bar, Column, Line, Pie } from '@ant-design/charts'
import style from './DynamicChartCpn.module.scss'

const DynamicChartCpn = (props) => {
  const { chartType, title, description, ...rest } = props

  if (props.data === undefined || props.data === null) {
    return <h2>数据加载失败</h2>
  }

  let Chart = <h2>暂无图表数据</h2>

  if (chartType === 'Line') {
    Chart = <Line {...rest}></Line>
    console.log('Line')
  } else if (chartType === 'Area') {
    Chart = <Area {...rest}></Area>
    console.log('Area')
  } else if (chartType === 'Column') {
    Chart = <Column {...rest}></Column>
  } else if (chartType === 'Bar') {
    Chart = <Bar {...rest}></Bar>
  } else if (chartType === 'Pie') {
    Chart = <Pie {...rest}></Pie>
  }

  const wrapRef = useRef(null)
  const headerRef = useRef(null)
  const [ChartHeight, setChartHeight] = useState(0)

  return (
    <div className={style.context} ref={wrapRef}>
      {/* <h1>bbbbbb</h1> */}
      <div
        className={style.header}
        style={{ paddingBottom: '5px' }}
        ref={headerRef}
      >
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
      <div className={style.context}>{Chart}</div>
    </div>
  )
}

export default memo(DynamicChartCpn)
