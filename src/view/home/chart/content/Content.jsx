import { memo, useEffect, useState } from 'react'
import { Col, Row, App } from 'antd'
import { connect } from 'react-redux'

import style from './Content.module.scss'
import ChartDemo from '@/component/chart/LineDemo'
import ChartWrap from '../cpns/cardWrap/CardWrap'
import CardModal from '../cpns/cardModal/CardModal'
import DynamicChartCpnWithDataFetch from '@/component/chart/DynamicChartCpnWithDataFetch'
import { fetchCreatedCharts } from '@/store/features/view/home/chart'
import { useNavigate } from 'react-router-dom'
import ChartDetailModal from '@/view/home/chart/cpns/chartDetailModal/ChartDetailModal'

const Content = (props) => {
  const { cardSize, createdCharts = [], fetchCreatedChartsDispatch } = props
  const nav = useNavigate()
  const { modal } = App.useApp()

  useEffect(() => {
    // 发送请求获取已创建的图表
    fetchCreatedChartsDispatch()
  }, [])

  const [ifShowModal, setIfShowModal] = useState(false)

  const deleteHandler = (chartId) => {
    console.log('deleteHandler', chartId)
    modal.confirm({
      title: '删除图表',
      content: '确定删除该图表吗?',
      onOk: () => {
        console.log('执行删除逻辑')
      }
    })
  }
  const editHandler = (chartId) => {
    // console.log('editHandler', chartId)
    nav(`/chart?chartId=${chartId}`)
  }
  const detailHandler = (chartDetail) => {
    console.log('detailHandler', chartDetail)
    modal.confirm({
      title: chartDetail.chartName,
      width: '80vw',
      icon: null,
      closable: true,
      maskClosable: true,
      centered: true,
      cancelText: '关闭',
      okText: null,
      okCancel: false,
      content: <ChartDetailModal chartConfig={chartDetail} />
    })
  }

  return (
    <div className={style.content}>
      <CardModal ifShowModal={ifShowModal} setIfShowModal={setIfShowModal}>
        {/* <DynamicChartCpnWithDataFetch {...createdChartConfig} /> */}
      </CardModal>
      <Row gutter={16} className={style.row}>
        {createdCharts?.map((createdChartConfig, index) => {
          return (
            <Col span={cardSize.colSpan} key={index}>
              <ChartWrap
                height={cardSize.height}
                title={createdChartConfig.chartName}
                deleteHandler={() => deleteHandler(createdChartConfig)}
                editHandler={() => editHandler(createdChartConfig._id)}
                detailHandler={() => detailHandler(createdChartConfig)}
              >
                <DynamicChartCpnWithDataFetch {...createdChartConfig} />
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
