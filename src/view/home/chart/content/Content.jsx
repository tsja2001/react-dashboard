import ChartDemo from '@/component/chart/LineDemo'
import { memo, useContext } from 'react'
import style from './Content.module.scss'
import { Col, Row } from 'antd'
import ChartWrap from '../cpns/ChartWrap/ChartWrap'
import ColumnDemo from '@/component/chart/ColumnDemo'
import PieDemo from '@/component/chart/PieDemo'
import { HomeChatContext } from '../ChartLayout'
import { cardSizeConfig } from '@/config/cardSizeConfig'

const Content = () => {
  const { cardSize } = useContext(HomeChatContext)
  const cardSizeStyle = cardSizeConfig[cardSize]

  return (
    <div className={style.content}>
      <Row gutter={16} className={style.row}>
        <Col span={cardSizeStyle.colSpan}>
          <ChartWrap width="100%" height={cardSizeStyle.height}>
            <ChartDemo />
          </ChartWrap>
        </Col>
        <Col span={cardSizeStyle.colSpan}>
          <ChartWrap width="100%" height={cardSizeStyle.height}>
            <ColumnDemo />
          </ChartWrap>
        </Col>
        <Col span={cardSizeStyle.colSpan}>
          <ChartWrap width="100%" height={cardSizeStyle.height}>
            <PieDemo />
          </ChartWrap>
        </Col>
        <Col span={cardSizeStyle.colSpan}>
          <ChartWrap width="100%" height={cardSizeStyle.height}>
            <ChartDemo />
          </ChartWrap>
        </Col>
        <Col span={cardSizeStyle.colSpan}>
          <ChartWrap width="100%" height={cardSizeStyle.height}>
            <ChartDemo />
          </ChartWrap>
        </Col>
        <Col span={cardSizeStyle.colSpan}>
          <ChartWrap width="100%" height={cardSizeStyle.height}>
            <ChartDemo />
          </ChartWrap>
        </Col>
      </Row>
    </div>
  )
}

export default memo(Content)
