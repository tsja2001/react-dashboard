import { memo, useCallback, useContext, useEffect } from 'react'
import { connect } from 'react-redux'
import { Select as AntdSelect } from 'antd'
import {
  fetchChartDataById,
  fetchSelectOptions,
  setcurrentChartId
} from '@/store/features/view/chart'
import { ChartContext } from '@/view/chart/ChartLayout'

const Select = (props) => {
  const {
    fetchChartDataDispatch,
    setcurrentChartIdDispatch,
    fetchSelectOptionsDispatch,
    currentChartId,
    currentChartData,
    selectedDataOptions
  } = props

  const { setAvailablePresetChartConfigByType } = useContext(ChartContext)

  const onChange = useCallback(async (value) => {
    setcurrentChartIdDispatch(value)
    fetchChartDataDispatch(value)
  }, [])

  // 设置Select默认选中第一个数据源
  useEffect(() => {
    if (selectedDataOptions.length > 0) {
      if (!currentChartData || Object.keys(currentChartData).length === 0) {
        // 有可选项, 并且当前没有选中数据源, 则默认选中第一个
        onChange(selectedDataOptions[0].value)
      }
    } else {
      // 获取数据源列表
      fetchSelectOptionsDispatch()
    }
  }, [selectedDataOptions])

  // 根据当前图表数据, 获取可用图表预设
  useEffect(() => {
    if (currentChartData && Object.keys(currentChartData).length > 0) {
      const avilableChartType = currentChartData.chartType
      setAvailablePresetChartConfigByType(avilableChartType)
    }
  }, [currentChartData])

  return (
    <div>
      <AntdSelect
        showSearch
        placeholder="请选择一个数据源"
        optionFilterProp="children"
        onChange={onChange}
        value={currentChartId}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={selectedDataOptions}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentChartId: state.viewChart.currentChartId,
  currentChartData: state.viewChart.currentChartData,
  selectedDataOptions: state.viewChart.selectedDataOptions
})

const mapDispatchToProps = (dispatch) => ({
  fetchSelectOptionsDispatch: () => dispatch(fetchSelectOptions()),
  fetchChartDataDispatch: (value) => dispatch(fetchChartDataById(value)),
  setcurrentChartIdDispatch: (value) => dispatch(setcurrentChartId(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Select))
