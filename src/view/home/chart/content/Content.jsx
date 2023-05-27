import { memo, useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { connect } from 'react-redux'

import style from './Content.module.scss'
import ChartDemo from '@/component/chart/LineDemo'
import ChartWrap from '../cpns/cardWrap/CardWrap'
import ColumnDemo from '@/component/chart/ColumnDemo'
import PieDemo from '@/component/chart/PieDemo'
import CardModal from '../cpns/cardModal/CardModal'
import DynamicChartCpnWithDataFetch from '@/component/chart/DynamicChartCpnWithDataFetch'
import { fetchCreatedCharts } from '@/store/features/view/home/chart'

const Content = (props) => {
  const { cardSize, createdCharts = [], fetchCreatedChartsDispatch } = props

  // console.log('createdCharts--', createdCharts)

  useEffect(() => {
    // 发送请求获取已创建的图表
    fetchCreatedChartsDispatch()
  }, [])

  const [ifShowModal, setIfShowModal] = useState(false)

  const deleteHandler = (chartId) => {
    console.log('deleteHandler', chartId)
  }
  const editHandler = (chartId) => {
    console.log('editHandler', chartId)
  }
  const detailHandler = (chartId) => {
    console.log('detailHandler', chartId)
    setIfShowModal(true)
  }

  return (
    <div className={style.content}>
      <CardModal ifShowModal={ifShowModal} setIfShowModal={setIfShowModal}>
        <ChartDemo />
      </CardModal>
      <Row gutter={16} className={style.row}>
        {createdCharts?.map((chartConfig, index) => {
          return (
            <Col span={cardSize.colSpan} key={index}>
              <ChartWrap height={cardSize.height} title={chartConfig.chartName}>
                <DynamicChartCpnWithDataFetch {...chartConfig} />
              </ChartWrap>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cardSize: state.viewHomeChart.cardSize,
  createdCharts: state.viewHomeChart.createdCharts
})
const mapDispatchToProps = (dispatch) => ({
  fetchCreatedChartsDispatch: () => dispatch(fetchCreatedCharts())
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Content))
