import { memo, useContext } from 'react'
import { connect } from 'react-redux'
import { Line, Area, Column, Bar, Pie } from '@ant-design/plots'

import { ChartContext } from '@/view/chart/ChartLayout'
import style from './ChartPreview.module.scss'
import DynamicChartCpn from '@/component/chart/DynamicChartCpn'

const ChartPreview = (props) => {
  const { currentChartConfigByPreset, currentChartConfigByForm } =
    useContext(ChartContext)
  const { currentChartData } = props

  // console.log('---------------------')
  // console.log('currentChartData', currentChartData)
  // // console.log('currentChartConfigByPreset', currentChartConfigByPreset)
  // console.log('currentChartConfigByForm', currentChartConfigByForm)
  // console.log('---------------------')

  return (
    <div className={style.context}>
      {currentChartConfigByPreset.cpnName === 'Line' && (
        // <Line
        //   {...currentChartData.chartConfig}
        //   // {...currentChartConfigByPreset.presetConf}
        //   {...currentChartConfigByForm}
        // />
        <DynamicChartCpn {...currentChartData.chartConfig} />
      )}
      {currentChartConfigByPreset.cpnName === 'Area' && (
        <Area
          {...currentChartData.chartConfig}
          // {...currentChartConfigByPreset.presetConf}
          {...currentChartConfigByForm}
        />
      )}
      {currentChartConfigByPreset.cpnName === 'Column' && (
        <Column
          {...currentChartData.chartConfig}
          // {...currentChartConfigByPreset.presetConf}
          {...currentChartConfigByForm}
        />
      )}
      {currentChartConfigByPreset.cpnName === 'Bar' && (
        <Bar
          {...currentChartData.chartConfig}
          // {...currentChartConfigByPreset.presetConf}
          {...currentChartConfigByForm}
        />
      )}
      {currentChartConfigByPreset.cpnName === 'Pie' && (
        <Pie
          {...currentChartData.chartConfig}
          angleField="value"
          colorField="key"
          // {...currentChartConfigByPreset.presetConf}
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
