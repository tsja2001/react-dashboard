import { useRef } from 'react'
import { Line } from '@ant-design/charts'
import ChartWrap from './ChartWrap/ChartWrap'

const ChartTooltip = () => {
  const chartRef = useRef()

  const data = [
    {
      year: '1991',
      value: 3
    },
    {
      year: '1992',
      value: 4
    },
    {
      year: '1993',
      value: 3.5
    },
    {
      year: '1994',
      value: 5
    },
    {
      year: '1995',
      value: 4.9
    },
    {
      year: '1996',
      value: 6
    },
    {
      year: '1997',
      value: 7
    },
    {
      year: '1998',
      value: 9
    },
    {
      year: '1999',
      value: 13
    }
  ]

  const config = {
    data,
    yField: 'value',
    xField: 'year',
    tooltip: {
      customContent: (title, items) => {
        // console.log(title, items)
        return (
          <>
            <h2 style={{ marginTop: 16 }}>{title}</h2>
            <ul style={{ paddingLeft: 0 }}>
              {items?.map((item, index) => {
                const { name, value, color } = item
                return (
                  <li
                    key={index}
                    className="g2-tooltip-list-item"
                    data-index={index}
                    style={{
                      marginBottom: 4,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <span
                      className="g2-tooltip-marker"
                      style={{ backgroundColor: color }}
                    ></span>
                    <span
                      style={{
                        display: 'inline-flex',
                        flex: 1,
                        justifyContent: 'space-between'
                      }}
                    >
                      <span style={{ marginRight: 16 }}>{name}:</span>
                      <span className="g2-tooltip-list-item-value">
                        {value}
                      </span>
                    </span>
                  </li>
                )
              })}
            </ul>
          </>
        )
      }
    },
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#2593fc',
        lineWidth: 2
      }
    }
  }

  const downloadImage = () => {
    console.log(chartRef.current)
  }

  return (
    <div>
      <button onClick={downloadImage}>导出图片</button>
      <Line
        {...config}
        onReady={(chart) => {
          chart.on('plot:click', (evt) => {
            const { x, y } = evt
            const { xField } = chart.options
            const tooltipData = chart.chart.getTooltipItems({ x, y })
            console.log('xField', xField)
            console.log('tooltipData', tooltipData)
          })
          chart.on('chart:click', (evt) => {
            console.log(evt)
          })
        }}
        ref={chartRef}
      />
    </div>
  )
}

export default ChartWrap(ChartTooltip)
