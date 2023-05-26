import { memo, useCallback, useContext, useEffect } from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'antd'
import { useNavigate } from 'react-router-dom'

import style from './SelectChart.module.scss'
import ChartWrap from '../cpns/cardWrap/CardWrap'
import { ChartContext } from '../../ChartLayout'
import Select from '../cpns/select/Select'
import DynamicChartCpn from '@/component/chart/DynamicChartCpn'

const SelectChart = (props) => {
  const { currentChartData } = props

  const { availablePresetChartConfig, setCurrentChartConfigByPreset } =
    useContext(ChartContext)

  const nav = useNavigate()

  // 如果没有选中数据源, 则跳转到选中数据源页面
  useEffect(() => {
    if (!currentChartData) {
      return nav('/chart/select_data')
    }
  }, [])

  // 点击图表, 跳转到图表配置页面
  const detailHandler = useCallback((chartConfig) => {
    setCurrentChartConfigByPreset(chartConfig)
    nav('/chart/configure_chart')
  }, [])

  return (
    <div className={style.content}>
      <div className={style.form}>
        <Select />
      </div>
      <div className={style.list}>
        {availablePresetChartConfig.map((chartGroup) => (
          <div key={chartGroup.groupLabel}>
            <h1>分组类型: {chartGroup.groupLabel}</h1>
            <div>
              {chartGroup.groupItem.map((chartType) => (
                <div key={chartType.label}>
                  <h2>图表类型: {chartType.label}</h2>
                  <Row gutter={8} className={style.row}>
                    {chartType.presetList.map((chartConfig) => (
                      <Col span={12} key={chartConfig.label}>
                        <ChartWrap
                          height={'300px'}
                          detailHandler={() => detailHandler(chartConfig)}
                          title={chartConfig.label}
                        >
                          <DynamicChartCpn
                            {...currentChartData.chartConfig}
                            {...chartConfig.presetConf}
                          ></DynamicChartCpn>
                        </ChartWrap>
                      </Col>
                    ))}
                  </Row>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentChartData: state.viewChartSelectData.currentChartData
})

export default connect(mapStateToProps)(memo(SelectChart))
