import { memo, useContext } from 'react'
import style from './ChartPreview.module.scss'
import { ChartContext } from '@/view/chart/ChartLayout'
import { connect } from 'react-redux'
import { Line, Area, Column, Bar, Pie } from '@ant-design/plots'

const ChartPreview = (props) => {
  const { duplicateChartData } = useContext(ChartContext)
  const { currentChartData } = props

  return (
    <div className={style.context}>
      {duplicateChartData.cpnName === 'Line' && (
        <Line
          {...currentChartData.chartConfig}
          {...duplicateChartData.presetConf}
        />
      )}
      {duplicateChartData.cpnName === 'Area' && (
        <Area
          {...currentChartData.chartConfig}
          {...duplicateChartData.presetConf}
        />
      )}
      {duplicateChartData.cpnName === 'Column' && (
        <Column
          {...currentChartData.chartConfig}
          {...duplicateChartData.presetConf}
        />
      )}
      {duplicateChartData.cpnName === 'Bar' && (
        <Bar
          {...currentChartData.chartConfig}
          {...duplicateChartData.presetConf}
        />
      )}
      {duplicateChartData.cpnName === 'Pie' && (
        <Pie
          {...currentChartData.chartConfig}
          angleField="value"
          colorField="key"
          {...duplicateChartData.presetConf}
        />
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentChartData: state.viewChartSelectData.currentChartData
})

export default connect(mapStateToProps)(memo(ChartPreview))
