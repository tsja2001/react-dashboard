import { memo } from 'react'
// import DynamicChartCpnWithDataFetch from '../../../../../component/chart/DynamicChartCpnWithDataFetch'
import style from './ChartDetailModal.module.scss'
import { Divider } from 'antd'
import DynamicChartCpnWithDataFetch from '../DynamicChartCpnWithDataFetch'

// 显示图表详细数据的组件, 目前用于首页点击图表详细后, 弹出modal中显示图表详细数据
const ChartDetailModal = (props) => {
  const { chartConfig } = props
  return (
    <div className={style.content}>
      <Divider />
      <div className={style.scroll}>
        <div className={style.chart}>
          <DynamicChartCpnWithDataFetch {...chartConfig} />
        </div>
        <Divider />
        <div className={style.dataList}>
          {/* <h2>数据列源展示</h2>
          <h2>数据列源展示</h2>
          <h2>数据列源展示</h2>
          <h2>数据列源展示</h2>
          <h2>数据列源展示</h2>
          <h2>数据列源展示</h2>
          <h2>数据列源展示</h2>
          <h2>数据列源展示</h2>
          <h2>数据列源展示</h2>
          <h2>数据列源展示</h2>
          <h2>数据列源展示</h2>
          <h2>数据列源展示</h2> */}
        </div>
      </div>
    </div>
  )
}

export default memo(ChartDetailModal)
