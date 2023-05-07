import ChartDemo from '@/component/chart/ChartDemo'
import { memo } from 'react'
import style from './Content.module.scss'
import { Col, Row } from 'antd'

const Content = () => {
  return (
    <div className={style.content}>
      <Row gutter={16} className={style.row}>
        <Col span={8}>
          <ChartDemo width="100%" height="300px" />
        </Col>
        <Col span={8}>
          <ChartDemo width="100%" height="300px" />
        </Col>
        <Col span={8}>
          <ChartDemo width="100%" height="300px" />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <ChartDemo width="100%" height="300px" />
        </Col>
        <Col span={8}>
          <ChartDemo width="100%" height="300px" />
        </Col>
      </Row>
    </div>
  )
}

export default memo(Content)
