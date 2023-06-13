import { memo, useEffect } from 'react'
import { chartDataList } from './chartDataList'
import style from './DashboardLeftSider.module.scss'
import Delete from '../cpns/delete/Delete'
import { fetchCreatedCharts } from '@/store/features/view/home/chart'
import { connect } from 'react-redux'
import DynamicChartCpnWithDataFetch from '@/component/chart/DynamicChartCpnWithDataFetch'

const DashboardLeftSider = (prop) => {
  const { onDragStart = () => {}, onDrogDelete = () => {} } = prop

  useEffect(() => {
    // 发送请求获取已创建的图表
    prop.fetchCreatedChartsDispatch()
  }, [])

  return (
    <div className={style.chartList}>
      {/* {chartDataList.map((item, index) => (
        <div
          id={item.id}
          key={index}
          className={style.item}
          onDragStart={(event) => onDragStart(event, item)}
          draggable={true}
        >
          <span>{item.name}</span>
        </div>
      ))} */}
      {prop.createdCharts.map((createdChartConfig, index) => {
        return (
          <div
            id={createdChartConfig.id}
            key={index}
            className={style.item}
            onDragStart={(event) => onDragStart(event, createdChartConfig)}
            draggable={true}
          >
            <span>{createdChartConfig.chartName ?? '暂无标题'}</span>
            <DynamicChartCpnWithDataFetch {...createdChartConfig} />
          </div>
        )
      })}
      <Delete onDrogDelete={onDrogDelete} />
    </div>
  )
}
const mapStateToProps = (state) => ({
  createdCharts: state.viewHomeChart.createdCharts
})
const mapDispatchToProps = (dispatch) => ({
  fetchCreatedChartsDispatch: () => dispatch(fetchCreatedCharts())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(DashboardLeftSider))
