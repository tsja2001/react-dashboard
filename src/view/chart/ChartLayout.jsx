import { createContext, memo, useCallback, useEffect, useState } from 'react'
import style from './ChartLayout.module.scss'
import Header from './header/Header'
import { Outlet } from 'react-router-dom'
import { loadAllPresetChartConfig } from '@/store/features/view/chart/selectChart'
import { connect } from 'react-redux'

export const ChartContext = createContext()

const ChartLayout = (props) => {
  // 获取全部图表预设配置, 由于预设中存在函数, 不适合存在redux中, 因此通过context传递
  const [allchartPresetConfig, setAllchartPresetConfig] = useState({})
  const [availablePresetChartConfig, setAvailablePresetChartConfig] = useState(
    {}
  )

  useEffect(() => {
    props.loadAllPresetChartConfigDispatch()
  }, [])

  const getAvailablePresetChartConfig = useCallback(
    (requireChartType) => {
      const availablePresetChartConfig = []

      allchartPresetConfig.forEach((configGroupItem) => {
        const currentGroupType = configGroupItem.groupType

        // 如果当前所需图表类型, 包含当前组类型, 则直接添加,
        // 比如requireChartType: [‘Pie’], groupType: ‘Pie’
        if (requireChartType.includes(currentGroupType)) {
          availablePresetChartConfig.push(configGroupItem)
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

          availablePresetChartConfig.push({
            groupLabel: configGroupItem.groupLabel,
            groupType: currentGroupType,
            groupItem: requireGroupItemInCurrentGroup
          })
        }
      })

      console.log(
        'availablePresetChartConfig',
        JSON.parse(JSON.stringify(availablePresetChartConfig))
      )

      setAvailablePresetChartConfig(availablePresetChartConfig)
    },
    [allchartPresetConfig]
  )

  // 懒加载预设配置
  useEffect(() => {
    import('@/config/chartPresetConfig/index.js').then((res) => {
      setAllchartPresetConfig(res.chartPresetConfig)
    })
  }, [])

  return (
    <div className={style.content}>
      <ChartContext.Provider
        value={{ allchartPresetConfig, getAvailablePresetChartConfig }}
      >
        <Header />
        <Outlet />
      </ChartContext.Provider>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  loadAllPresetChartConfigDispatch: () => dispatch(loadAllPresetChartConfig())
})

export default connect(null, mapDispatchToProps)(memo(ChartLayout))
