import { memo, useEffect } from 'react'
import style from './DashboardLeftSider.module.scss'
import Delete from '../cpns/delete/Delete'
import { fetchCreatedCharts } from '@/store/features/view/home/chart'
import { connect } from 'react-redux'
import DynamicChartCpnWithDataFetch from '@/component/chart/DynamicChartCpnWithDataFetch'
import ChartWrap from '@/component/chart/cardWrap/CardWrap'

const DashboardLeftSider = (prop) => {
  const { onDragStart = () => {}, onDrogDelete = () => {} } = prop

  useEffect(() => {
    // 发送请求获取已创建的图表
    prop.fetchCreatedChartsDispatch()
  }, [])

  return (
    <div className={style.chartList}>
      <Delete onDrogDelete={onDrogDelete} />
      {prop.createdCharts.map((createdChartConfig, index) => {
        return (
          <div id={createdChartConfig.id} key={index} className={style.item}>
            {/* <span>{createdChartConfig.chartName ?? '暂无标题'}</span> */}
            <ChartWrap
              height="300px"
              title={createdChartConfig.chartName ?? '暂无标题'}
              showBtn={false}
            >
              <DynamicChartCpnWithDataFetch
                selfProps={{
                  onDragStart: (event) =>
                    onDragStart(event, createdChartConfig),
                  draggable: true
                }}
                {...createdChartConfig}
              />
            </ChartWrap>
          </div>
        )
      })}
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
