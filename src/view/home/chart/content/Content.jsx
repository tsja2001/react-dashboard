import ChartDemo from '@/component/chart/LineDemo'
import { memo, useContext, useState } from 'react'
import style from './Content.module.scss'
import { Col, Row } from 'antd'
import ChartWrap from '../cpns/cardWrap/CardWrap'
import ColumnDemo from '@/component/chart/ColumnDemo'
import PieDemo from '@/component/chart/PieDemo'
import { HomeChatContext } from '../ChartLayout'
import { cardSizeConfig } from '@/config/cardSizeConfig'
import CardModal from '../cpns/cardModal/CardModal'

const Content = () => {
  const { cardSize } = useContext(HomeChatContext)
  const cardStyle = cardSizeConfig[cardSize]

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
        <Col span={cardStyle.colSpan}>
          <ChartWrap
            height={cardStyle.height}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
            detailHandler={detailHandler}
          >
            <ChartDemo />
          </ChartWrap>
        </Col>
        <Col span={cardStyle.colSpan}>
          <ChartWrap height={cardStyle.height}>
            <ColumnDemo />
          </ChartWrap>
        </Col>
        <Col span={cardStyle.colSpan}>
          <ChartWrap height={cardStyle.height}>
            <PieDemo />
          </ChartWrap>
        </Col>
        <Col span={cardStyle.colSpan}>
          <ChartWrap height={cardStyle.height}>
            <ChartDemo />
          </ChartWrap>
        </Col>
        <Col span={cardStyle.colSpan}>
          <ChartWrap height={cardStyle.height}>
            <ChartDemo />
          </ChartWrap>
        </Col>
        <Col span={cardStyle.colSpan}>
          <ChartWrap height={cardStyle.height}>
            <ChartDemo />
          </ChartWrap>
        </Col>
      </Row>
    </div>
  )
}

export default memo(Content)
