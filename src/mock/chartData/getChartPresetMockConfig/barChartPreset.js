export default [
  {
    type: 'Bar',
    label: '条形图',
    presetList: [
      {
        label: '基础条形图',
        presetConf: {}
      },
      {
        label: '分组条形图',
        presetConf: {
          isGroup: true
        }
      },
      {
        label: '分组条形图, 显示数据',
        presetConf: {
          isGroup: true,
          label: {
            // 可手动配置 label 数据标签位置
            position: 'middle',
            // 'left', 'middle', 'right'
            // 可配置附加的布局方法
            layout: [
              // 柱形图数据标签位置自动调整
              {
                type: 'interval-adjust-position'
              }, // 数据标签防遮挡
              {
                type: 'interval-hide-overlap'
              }, // 数据标签文颜色自动调整
              {
                type: 'adjust-color'
              }
            ]
          }
        }
      },
      {
        label: '百分比条形图',
        presetConf: {
          isPercent: true,
          isStack: true,
          label: {
            position: 'middle',
            content: (item) => {
              let res = null

              try {
                res = item.value.toFixed(2)
              } catch (error) {
                console.log(error)
              }
              return res
            },
            style: {
              fill: '#fff'
            }
          }
        }
      }
    ]
  }
]
