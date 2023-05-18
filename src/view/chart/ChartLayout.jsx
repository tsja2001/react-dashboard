import { createContext, memo, useCallback, useEffect, useState } from 'react'
import style from './ChartLayout.module.scss'
import Header from './header/Header'
import { Outlet } from 'react-router-dom'

export const ChartContext = createContext()

const ChartLayout = () => {
  // 获取全部图表预设配置, 由于预设中存在函数, 不适合存在redux中, 因此通过context传递
  const [allchartPresetConfig, setAllchartPresetConfig] = useState([])
  // 当前可以显示的预设配置
  const [availablePresetChartConfig, setAvailablePresetChartConfig] = useState(
    []
  )
  // 当前选中的预设配置的深拷贝副本
  const [duplicateChartData, setDuplicateChartData] = useState({})

  useEffect(() => {
    console.log('ChartLayout中监听到duplicateChartData', duplicateChartData)
  }, [duplicateChartData])

  // 根据所需图表类型, 设置可用的预设配置
  const setAvailablePresetChartConfigByType = useCallback(
    (requireChartType) => {
      const res = []

      if (allchartPresetConfig.length === 0) return

      allchartPresetConfig.forEach((configGroupItem) => {
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
        value={{
          setAvailablePresetChartConfigByType,
          availablePresetChartConfig,
          setDuplicateChartData,
          duplicateChartData
        }}
      >
        <Header />
        <Outlet />
      </ChartContext.Provider>
    </div>
  )
}

export default memo(ChartLayout)
