import { memo } from 'react'
import style from './SelectChart.module.scss'
import LineBasic from '@/component/chart/Line/LineBasic'
import { Col, Row } from 'antd'
import ChartWrap from '../cpns/cardWrap/CardWrap'
import { connect } from 'react-redux'

// const configList = [{}]

const SelectChart = (props) => {
  const { currentChartData } = props

  return (
    <div className={style.content}>
      <h2>SelectChart</h2>
      <Row gutter={16} className={style.row}>
        <Col span={12}>
          <ChartWrap
            height={'300px'}
            detailHandler={(id) => console.log('detailHandler', id)}
          >
            <LineBasic chartData={currentChartData.chartData} />
          </ChartWrap>
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentChartData: state.viewChartSelectData.currentChartData
})

export default connect(mapStateToProps)(memo(SelectChart))
