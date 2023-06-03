import { memo } from 'react'
import { SheetComponent } from '@antv/s2-react'
import { connect } from 'react-redux'

const TableShowChartData = (props) => {
  const { width, chartConfig, maxHeight = 600 } = props

  let dataCfg = {}
  let options = {
    showSeriesNumber: true,
    style: {
      layoutWidthType: 'colAdaptive'
    }
  }
  const themeCfg = {
    name: 'gray',
    theme: {
      dataCell: {
        text: {
          textAlign: 'center'
        }
      }
    }
  }
  let restCfg = {}

  const darkStyle = props.theme === 'dark' ? { filter: 'invert(0.85)' } : {}

  if (chartConfig?.seriesField && chartConfig?.seriesField?.length) {
    // 当前是分组数据
    const yField = chartConfig?.yField

    // 全部字段的key
    const fieldsKeys = Object.keys(chartConfig?.meta ?? {})
    // 去除y轴的key
    const xFieldKeys = fieldsKeys.filter((item) => item !== yField)

    const meta = fieldsKeys.map((item) => {
      return {
        field: item,
        name: chartConfig?.meta?.[item]?.alias ?? item
      }
    })

    dataCfg = {
      ...dataCfg,
      fields: {
        rows: xFieldKeys,
        values: [yField]
      },
      meta: [...meta]
    }
    options = {
      ...options,
      showSeriesNumber: true
    }
    restCfg = {
      ...restCfg,
      sheetType: 'pivot'
    }
  } else {
    // 如果当前数据不是分组数据, 是单列数据
    let xField = chartConfig?.xField
    let yField = chartConfig?.yField

    if (chartConfig.angleField) {
      xField = chartConfig?.angleField
      yField = chartConfig?.colorField
    }

    console.log(xField, yField)

    dataCfg = {
      ...dataCfg,
      fields: {
        columns: [xField, yField]
      },
      meta: [
        { field: xField, name: chartConfig?.meta?.[xField]?.alias ?? 'x轴' },
        { field: yField, name: chartConfig?.meta?.[yField]?.alias ?? 'y轴' }
      ]
    }

    options = {
      ...options
    }

    restCfg = {
      ...restCfg,
      sheetType: 'table'
    }
  }

  // 计算高度
  let height = 30 * (chartConfig?.data?.length + 1) + 10
  height = height > maxHeight ? maxHeight : height

  console.log('height', height)

  return (
    <div style={darkStyle}>
      <SheetComponent
        dataCfg={{
          data: chartConfig?.data,
          ...dataCfg
        }}
        options={{
          width,
          height,
          ...options
        }}
        themeCfg={themeCfg}
        {...restCfg}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  theme: state.global.theme
})

export default connect(mapStateToProps)(memo(TableShowChartData))
