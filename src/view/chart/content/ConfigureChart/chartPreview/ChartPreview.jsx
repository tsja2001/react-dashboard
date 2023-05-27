import { memo, useContext } from 'react'
import { connect } from 'react-redux'

import { ChartContext } from '@/view/chart/ChartLayout'
import style from './ChartPreview.module.scss'
import DynamicChartCpn from '@/component/chart/DynamicChartCpn'

const ChartPreview = (props) => {
  const { currentChartConfigByForm } = useContext(ChartContext)
  const { currentChartData } = props

  return (
    <div className={style.context}>
      <DynamicChartCpn
        {...currentChartData.chartConfig}
        {...currentChartConfigByForm}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentChartData: state.viewChart.currentChartData
})

export default connect(mapStateToProps)(memo(ChartPreview))
