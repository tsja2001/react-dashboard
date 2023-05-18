import { measureTextWidth } from '@ant-design/plots'

function renderStatistic(containerWidth, text, style) {
  const { width: textWidth, height: textHeight } = measureTextWidth(text, style)
  const R = containerWidth / 2 // r^2 = (w / 2)^2 + (h - offsetY)^2

  let scale = 1

  if (containerWidth < textWidth) {
    scale = Math.min(
      Math.sqrt(
        Math.abs(
          Math.pow(R, 2) /
            (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2))
        )
      ),
      1
    )
  }

  const textStyleStr = `width:${containerWidth}px;`
  return `<div style="${textStyleStr};font-size:${scale}em;line-height:${
    scale < 1 ? 1 : 'inherit'
  };">${text}</div>`
}

export default [
  {
    type: 'Pie:Bing',
    label: '饼图',
    presetList: [
      {
        label: '基础饼图',
        cpnName: 'Pie',
        presetConf: {
          radius: 0.9,
          label: {
            type: 'inner',
            offset: '-30%',
            // content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
            style: {
              fontSize: 14,
              textAlign: 'center'
            }
          },
          interactions: [
            {
              type: 'element-active'
            }
          ]
        }
      },
      {
        label: '基础饼图-外部标签',
        cpnName: 'Pie',
        presetConf: {
          radius: 0.9,
          label: {
            type: 'outer'
          },
          interactions: [
            {
              type: 'element-active'
            }
          ]
        }
      },
      {
        label: '四分之一圆',
        cpnName: 'Pie',
        presetConf: {
          radius: 1,
          // 设置圆弧起始角度
          startAngle: Math.PI,
          endAngle: Math.PI * 1.5,
          label: {
            type: 'inner',
            offset: '-8%',
            content: '{name}',
            style: {
              fontSize: 13
            }
          },
          interactions: [
            {
              type: 'element-active'
            }
          ],
          pieStyle: {
            lineWidth: 0
          }
        }
      }
    ]
  },
  {
    type: 'Pie:Huan',
    label: '环图',
    presetList: [
      {
        label: '环图',
        cpnName: 'Pie',
        presetConf: {
          radius: 1,
          innerRadius: 0.6,
          label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
              textAlign: 'center',
              fontSize: 14
            }
          },
          interactions: [
            {
              type: 'element-selected'
            },
            {
              type: 'element-active'
            }
          ],
          statistic: {
            title: {
              offsetY: -4,
              customHtml: (container, view, datum) => {
                const { width, height } = container.getBoundingClientRect()
                const d = Math.sqrt(
                  Math.pow(width / 2, 2) + Math.pow(height / 2, 2)
                )
                const text = datum ? datum.type : '总计'
                return renderStatistic(d, text, {
                  fontSize: 28
                })
              }
            },
            content: {
              offsetY: 4,
              style: {
                fontSize: '32px'
              },
              customHtml: (container, view, datum, data) => {
                const { width } = container.getBoundingClientRect()
                const text = datum
                  ? `¥ ${datum.value}`
                  : `¥ ${data.reduce((r, d) => r + d.value, 0)}`
                return renderStatistic(width, text, {
                  fontSize: 32
                })
              }
            }
          }
        }
      }
    ]
  }
]
