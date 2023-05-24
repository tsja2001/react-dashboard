import { memo, useContext } from 'react'
import style from './ChartPreview.module.scss'
import { ChartContext } from '@/view/chart/ChartLayout'
import lineAllConfig from '@/config/chartFromConfig/lineAllConfig'
import columnAllConfig from '@/config/chartFromConfig/columnAllConfig'
import areaAllConfig from '@/config/chartFromConfig/areaAllConfig'
import barAllConfig from '@/config/chartFromConfig/barAllConfig'
import pieAllConfig from '@/config/chartFromConfig/pieAllConfig'
import { connect } from 'react-redux'
import { Line, Area, Column, Bar, Pie } from '@ant-design/plots'
import { Col, Row } from 'antd'

const ChartPreview = (props) => {
  const { duplicateChartData } = useContext(ChartContext)
  const { currentChartData } = props

  console.log('currentChartData', currentChartData)

  // const duplicateChartData = {
  //   presetConf: {}
  // }

  return (
    <div className={style.context}>
      <Row>
        <Col span={8} style={{ height: '300px', width: '300px' }}>
          <Line
            {...currentChartData.chartConfig}
            {...duplicateChartData.presetConf}
            {...lineAllConfig}
          />
        </Col>
        <Col span={8} style={{ height: '300px', width: '300px' }}>
          <Area
            {...currentChartData.chartConfig}
            {...duplicateChartData.presetConf}
            {...areaAllConfig}
          />
        </Col>
        <Col span={8} style={{ height: '300px', width: '300px' }}>
          <Column
            {...currentChartData.chartConfig}
            {...duplicateChartData.presetConf}
            {...columnAllConfig}
          />
        </Col>
        <Col span={8} style={{ height: '300px', width: '300px' }}>
          <Bar
            {...currentChartData.chartConfig}
            {...duplicateChartData.presetConf}
            {...barAllConfig}
            xField="value"
            yField="key"
          />
        </Col>
        <Col span={8} style={{ height: '300px', width: '300px' }}>
          <Pie
            {...currentChartData.chartConfig}
            angleField="value"
            colorField="key"
            {...duplicateChartData.presetConf}
            {...pieAllConfig}
          />
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentChartData: state.viewChartSelectData.currentChartData
})

export default connect(mapStateToProps)(memo(ChartPreview))
