import { memo, useState } from 'react'
import { Col, Row } from 'antd'
import { connect } from 'react-redux'

import style from './Content.module.scss'
import ChartDemo from '@/component/chart/LineDemo'
import ChartWrap from '../cpns/cardWrap/CardWrap'
import ColumnDemo from '@/component/chart/ColumnDemo'
import PieDemo from '@/component/chart/PieDemo'
import CardModal from '../cpns/cardModal/CardModal'

const Content = (props) => {
  const { cardSize } = props

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
        <Col span={cardSize.colSpan}>
          <ChartWrap
            height={cardSize.height}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
            detailHandler={detailHandler}
          >
            <ChartDemo />
          </ChartWrap>
        </Col>
        <Col span={cardSize.colSpan}>
          <ChartWrap height={cardSize.height}>
            <ColumnDemo />
          </ChartWrap>
        </Col>
        <Col span={cardSize.colSpan}>
          <ChartWrap height={cardSize.height}>
            <PieDemo />
          </ChartWrap>
        </Col>
        <Col span={cardSize.colSpan}>
          <ChartWrap height={cardSize.height}>
            <ChartDemo />
          </ChartWrap>
        </Col>
        <Col span={cardSize.colSpan}>
          <ChartWrap height={cardSize.height}>
            <ChartDemo />
          </ChartWrap>
        </Col>
        <Col span={cardSize.colSpan}>
          <ChartWrap height={cardSize.height}>
            <ChartDemo />
          </ChartWrap>
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cardSize: state.chart.cardSize
})

export default connect(mapStateToProps)(memo(Content))
