import { memo, useEffect, useRef, useState } from 'react'
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
  const [chartHeight, setChartHeight] = useState(0)

  const setHeight = () => {
    const wrapHeight = wrapRef?.current?.offsetHeight
    const headerHeight = headerRef?.current?.offsetHeight
    if (wrapHeight && headerHeight) {
      setChartHeight(wrapHeight - headerHeight)
    }
  }

  useEffect(() => {
    // 最外层容器高度变化时, 重新设置图表高度
    const observer = new ResizeObserver((entries) => {
      setHeight()
    })

    if (wrapRef.current) {
      observer.observe(wrapRef.current)
    }
    // 初次渲染时, 设置图表高度
    setHeight()

    return () => {
      observer.disconnect()
    }
  }, [props])

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
      <div className={style.chart} style={{ height: chartHeight + 'px' }}>
        {Chart}
      </div>
    </div>
  )
}

export default memo(DynamicChartCpn)
