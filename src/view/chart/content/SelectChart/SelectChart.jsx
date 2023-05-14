import { memo, useEffect } from 'react'
import style from './SelectChart.module.scss'
import { Col, Row } from 'antd'
import ChartWrap from '../cpns/cardWrap/CardWrap'
import { connect } from 'react-redux'
import { Line } from '@ant-design/plots'
import {
  fetchAllPresetChartConfig,
  setAvailablePresetChartConfig
} from '@/store/features/view/chart/selectChart'

const SelectChart = (props) => {
  const {
    currentChartData,
    allPresetChartConfig,
    dispatchSetAvailablePresetChartConfig,
    availablePresetChartConfig
  } = props

  console.log('availablePresetChartConfig', availablePresetChartConfig)

  // 用户在第一步选择数据源变化时, 重新获取数据源下的所有可用预设chart配置

  // 若不存在可用预设chart配置, 则获取所有预设chart配置
  useEffect(() => {
    if (props.allPresetChartConfig.length === 0) {
      props.fetchAllPresetChartConfig()
    }
  }, [allPresetChartConfig])

  // 选择的图表变化时, 设置当前可用的预设chart配置
  useEffect(() => {
    const avilableChartType = currentChartData.chartType
    dispatchSetAvailablePresetChartConfig(avilableChartType)
  }, [currentChartData])

  return (
    <div className={style.content}>
      {availablePresetChartConfig.map((item) => (
        <div key={item.type}>
          <h2>{item.label}</h2>
          <Row gutter={8} className={style.row}>
            {item.presetList.map((chartConfig) => (
              <Col span={8} key={chartConfig.label}>
                <ChartWrap
                  height={'300px'}
                  detailHandler={(id) => console.log('detailHandler', id)}
                  title={chartConfig.label}
                >
                  <Line
                    {...currentChartData.chartConfig}
                    {...chartConfig.presetConf}
                  />
                </ChartWrap>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentChartData: state.viewChartSelectData.currentChartData,
  allPresetChartConfig: state.viewChartSelectChart.allPresetChartConfig,
  availablePresetChartConfig:
    state.viewChartSelectChart.availablePresetChartConfig
})

const mapDispatchToProps = (dispatch) => ({
  fetchAllPresetChartConfig: () => dispatch(fetchAllPresetChartConfig()),
  dispatchSetAvailablePresetChartConfig: (config) =>
    dispatch(setAvailablePresetChartConfig(config))
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(SelectChart))
