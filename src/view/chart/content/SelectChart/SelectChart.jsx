import { memo, useEffect } from 'react'
import style from './SelectChart.module.scss'
import { Col, Row } from 'antd'
import ChartWrap from '../cpns/cardWrap/CardWrap'
import { connect } from 'react-redux'
import { Line, Area, Column, Bar } from '@ant-design/plots'
import {
  fetchAllPresetChartConfig,
  setAvailablePresetChartConfig
} from '@/store/features/view/chart/selectChart'
import { useNavigate } from 'react-router-dom'
import { Pie } from '@ant-design/plots'

const SelectChart = (props) => {
  const {
    currentChartData,
    allPresetChartConfig,
    dispatchSetAvailablePresetChartConfig,
    availablePresetChartConfig
  } = props

  const nav = useNavigate()

  // 若不存在可用预设chart配置, 则获取所有预设chart配置
  useEffect(() => {
    if (allPresetChartConfig.length === 0) {
      props.fetchAllPresetChartConfig()
    }
  }, [allPresetChartConfig])

  // 择数据源变化时, 重新获取数据源下的所有可用预设chart配置
  useEffect(() => {
    if (!currentChartData) {
      return nav('/chart/select_data')
    }
    const avilableChartType = currentChartData.chartType
    dispatchSetAvailablePresetChartConfig(avilableChartType)
  }, [allPresetChartConfig, currentChartData])

  return (
    <div className={style.content}>
      {availablePresetChartConfig.map((chartGroup) => (
        // {/* todo: 编译开发, 直接渲染所有预设chart配置, 后续应解除注释 */}
        // {allPresetChartConfig.map((chartGroup) => (
        <div key={chartGroup.groupLabel}>
          <h1>分组类型: {chartGroup.groupLabel}</h1>
          <div>
            {chartGroup.groupItem.map((chartType) => (
              <div key={chartType.label}>
                <h2>图表类型: {chartType.label}</h2>
                {/* {chartType.presetList.map((chartConfig) => (
                  <div key={chartConfig.label}>
                    <h3>{chartConfig.label}</h3>
                  </div>
                ))} */}
                <Row gutter={8} className={style.row}>
                  {chartType.presetList.map((chartConfig) => (
                    <Col span={12} key={chartConfig.label}>
                      <ChartWrap
                        height={'300px'}
                        detailHandler={(id) => console.log('detailHandler', id)}
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
      {/* {allPresetChartConfig.map((chartTypeItem) => (
        <div key={chartTypeItem.type}>
          <h2>{chartTypeItem.label}</h2>
          <Row gutter={8} className={style.row}>
            {chartTypeItem.presetList.map((chartConfig) => (
              <Col span={12} key={chartConfig.label}>
                <ChartWrap
                  height={'300px'}
                  detailHandler={(id) => console.log('detailHandler', id)}
                  title={chartConfig.label}
                >
                  {chartTypeItem.type === 'Line' && (
                    <Line
                      {...currentChartData.chartConfig}
                      {...chartConfig.presetConf}
                    />
                  )}
                  {chartTypeItem.type === 'Area' && (
                    <Area
                      {...currentChartData.chartConfig}
                      {...chartConfig.presetConf}
                    />
                  )}
                  {chartTypeItem.type === 'Column' && (
                    <Column
                      {...currentChartData.chartConfig}
                      {...chartConfig.presetConf}
                    />
                  )}
                  {chartTypeItem.type === 'Bar' && (
                    <Bar
                      {...currentChartData.chartConfig}
                      {...chartConfig.presetConf}
                    />
                  )}
                  {chartTypeItem.type === 'Pie' && (
                    <Pie
                      {...currentChartData.chartConfig}
                      {...chartConfig.presetConf}
                    />
                  )}
                </ChartWrap>
              </Col>
            ))}
          </Row>
        </div>
      ))} */}
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
