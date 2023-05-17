import { memo, useContext, useEffect } from 'react'
import style from './SelectChart.module.scss'
import { Col, Row } from 'antd'
import ChartWrap from '../cpns/cardWrap/CardWrap'
import { connect } from 'react-redux'
import { Line, Area, Column, Bar } from '@ant-design/plots'
import { useNavigate } from 'react-router-dom'
import { Pie } from '@ant-design/plots'
import { ChartContext } from '../../ChartLayout'
import Select from '../cpns/select/Select'

const SelectChart = (props) => {
  const { currentChartData } = props

  const { availablePresetChartConfig } = useContext(ChartContext)

  const nav = useNavigate()

  // 如果没有选中数据源, 则跳转到选中数据源页面
  useEffect(() => {
    if (!currentChartData) {
      return nav('/chart/select_data')
    }
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
                          detailHandler={(id) =>
                            console.log('detailHandler', id)
                          }
                          title={chartConfig.label}
                        >
                          {chartType.type.startsWith('Line') && (
                            <Line
                              {...currentChartData.chartConfig}
                              {...chartConfig.presetConf}
                            />
                          )}
                          {chartType.type.startsWith('Area') && (
                            <Area
                              {...currentChartData.chartConfig}
                              {...chartConfig.presetConf}
                            />
                          )}
                          {chartType.type.startsWith('Column') && (
                            <Column
                              {...currentChartData.chartConfig}
                              {...chartConfig.presetConf}
                            />
                          )}
                          {chartType.type.startsWith('Bar') && (
                            <Bar
                              {...currentChartData.chartConfig}
                              {...chartConfig.presetConf}
                            />
                          )}
                          {chartType.type.startsWith('Pie') && (
                            <Pie
                              {...currentChartData.chartConfig}
                              angleField="value"
                              colorField="key"
                              {...chartConfig.presetConf}
                            />
                          )}
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
