import { createContext, memo, useCallback, useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import style from './ChartLayout.module.scss'
import Header from './header/Header'
import { findCreateChartConfigById } from '@/mock/getCreatedCharts'
import {
  fetchChartDataById,
  setcurrentChartId
} from '@/store/features/view/chart'

export const ChartContext = createContext()

const ChartLayout = (props) => {
  // 此组件主要用于给图表配置页面提供Context
  // 获取全部图表预设配置, 由于预设中存在函数, 不适合存在redux中, 因此通过Context传递(初始化时获取)
  const [allChartPresetConfig, setAllChartPresetConfig] = useState([])
  // 当前可以显示的预设配置(创建图表时由页面调用, 编辑图表时由此组件调用)
  const [availablePresetChartConfig, setAvailablePresetChartConfig] = useState(
    []
  )
  // 当前选中的预设配置(创建图表时由页面调用, 编辑图表时由此组件调用)
  const [currentChartConfigByPreset, setCurrentChartConfigByPreset] = useState(
    {}
  )

  // 全部图表配置(初始化时获取)
  const [allChartFromConfig, setAllChartFromConfig] = useState({})
  // 通过表单配置, 生成的图表配置(创建图表时由页面调用, 编辑图表时由此组件调用)
  const [currentChartConfigByForm, setCurrentChartConfigByForm] = useState({})

  // 根据所需图表类型, 设置可用的预设配置
  const setAvailablePresetChartConfigByType = useCallback(
    (requireChartType) => {
      const res = []

      if (allChartPresetConfig.length === 0) return

      allChartPresetConfig.forEach((configGroupItem) => {
        const currentGroupType = configGroupItem.groupType

        // 如果当前所需图表类型, 包含当前组类型, 则直接添加,
        // 比如requireChartType: [‘Pie’], groupType: ‘Pie’
        if (requireChartType.includes(currentGroupType)) {
          res.push(configGroupItem)
          return
        }

        // 如果当前所需图表类型, 不包含当前组类型, 则判断当前组类型下的子类型是否包含在所需图表类型中
        // 比如requireChartType: [‘Column:Single’], currentGroupType: 'Column'
        const requireTypeInCurrentGroupType = requireChartType.filter(
          (item) => {
            return item.split(':')[0] === currentGroupType
          }
        )

        // 添加当前组类型下的子类型
        if (requireTypeInCurrentGroupType.length > 0) {
          const { groupItem } = configGroupItem
          const requireGroupItemInCurrentGroup = groupItem.filter((item) => {
            return requireTypeInCurrentGroupType.includes(item.type)
          })

          res.push({
            groupLabel: configGroupItem.groupLabel,
            groupType: currentGroupType,
            groupItem: requireGroupItemInCurrentGroup
          })
        }
      })

      setAvailablePresetChartConfig(res)
    },
    [allChartPresetConfig]
  )

  // 懒加载预设配置
  useEffect(() => {
    import('@/config/chartPresetConfig/index.js').then((res) => {
      setAllChartPresetConfig(res.chartPresetConfig)
    })
    import('@/config/chartFromConfig/index.js').then((res) => {
      setAllChartFromConfig(res.default)
    })
  }, [])

  // 点击编辑图表后, 跳转到图表配置页面时, 根据路由参数, 设置当前选中的预设配置
  const nav = useNavigate()
  const location = useLocation()
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const chartId = queryParams.get('chartId')

    console.log('chartId', chartId)

    // 如果路径的参数没有chartId, 说明是新建图表, 跳转到选择数据页面
    if (chartId === null) {
      return nav('/chart/select_data')
    }
    // 如果路径的参数有chartId, 说明是编辑图表, 获取图表配置, 设置当前选中的预设配置
    // 获取图表配置数据
    const asyncFn = async () => {
      // 获取需要编辑的图表的配置
      const createdChartConfig = await findCreateChartConfigById(chartId)
      console.log('createdChartConfig', createdChartConfig)

      // 设置当前选中的数据源id
      props.setcurrentChartIdDispatch(createdChartConfig.dataId)

      // 获取图表需要展示的数据源
      const chartData = await props.fetchChartDataByIdDispatch(
        createdChartConfig.dataId
      )
      console.log('chartData', chartData.payload)
      setAvailablePresetChartConfigByType(chartData.chartType)

      // 设置当前选中的预设配置
      setCurrentChartConfigByPreset({
        cpnName: createdChartConfig.chartType,
        presetConf: createdChartConfig
      })
      //  设置当前选中的表单配置
      setCurrentChartConfigByForm(createdChartConfig)

      setTimeout(() => {
        nav('/chart/configure_chart?chartId=' + chartId)
      })
    }
    asyncFn()
  }, [])

  return (
    <div className={style.content}>
      <ChartContext.Provider
        value={{
          setAvailablePresetChartConfigByType,
          availablePresetChartConfig,
          currentChartConfigByForm,
          setCurrentChartConfigByForm,
          currentChartConfigByPreset,
          setCurrentChartConfigByPreset,
          allChartFromConfig
        }}
      >
        <Header />
        <Outlet />
      </ChartContext.Provider>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentChartData: state.viewChart.currentChartData
})

const mapDispatchToProps = (disptch) => ({
  fetchChartDataByIdDispatch: (id) => disptch(fetchChartDataById(id)),
  setcurrentChartIdDispatch: (id) => disptch(setcurrentChartId(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(ChartLayout))
