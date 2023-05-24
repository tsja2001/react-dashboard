import { memo, useContext } from 'react'
import { connect } from 'react-redux'
import { Line, Area, Column, Bar, Pie } from '@ant-design/plots'

import { ChartContext } from '@/view/chart/ChartLayout'
import style from './ChartPreview.module.scss'

const ChartPreview = (props) => {
  const { currentChartConfigByPreset, currentChartConfigByForm } =
    useContext(ChartContext)
  const { currentChartData } = props

  return (
    <div className={style.context}>
      {currentChartConfigByPreset.cpnName === 'Line' && (
        <Line
          {...currentChartData.chartConfig}
          {...currentChartConfigByPreset.presetConf}
          {...currentChartConfigByForm}
        />
      )}
      {currentChartConfigByPreset.cpnName === 'Area' && (
        <Area
          {...currentChartData.chartConfig}
          {...currentChartConfigByPreset.presetConf}
          {...currentChartConfigByForm}
        />
      )}
      {currentChartConfigByPreset.cpnName === 'Column' && (
        <Column
          {...currentChartData.chartConfig}
          {...currentChartConfigByPreset.presetConf}
          {...currentChartConfigByForm}
        />
      )}
      {currentChartConfigByPreset.cpnName === 'Bar' && (
        <Bar
          {...currentChartData.chartConfig}
          {...currentChartConfigByPreset.presetConf}
          {...currentChartConfigByForm}
        />
      )}
      {currentChartConfigByPreset.cpnName === 'Pie' && (
        <Pie
          {...currentChartData.chartConfig}
          angleField="value"
          colorField="key"
          {...currentChartConfigByPreset.presetConf}
          {...currentChartConfigByForm}
        />
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentChartData: state.viewChartSelectData.currentChartData
})

export default connect(mapStateToProps)(memo(ChartPreview))
