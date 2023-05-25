export default [
  {
    type: 'Area:Single',
    label: '面积图(单数据)',
    presetList: [
      {
        label: '基础面积图',
        cpnName: 'Area',
        presetConf: {}
      },
      {
        label: '渐变色面积图',
        cpnName: 'Area',
        presetConf: {
          areaStyle: {
            fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff'
          }
        }
      },
      {
        label: '渐变色面积图(平滑)',
        cpnName: 'Area',
        presetConf: {
          smooth: true,
          areaStyle: {
            fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff'
          }
        }
      }
    ]
  },
  {
    type: 'Area:Group',
    label: '面积图(多数据)',
    presetList: [
      {
        label: '基础面积图',
        cpnName: 'Area',
        presetConf: {}
      },
      {
        label: '百分比堆叠面积图',
        cpnName: 'Area',
        presetConf: {
          areaStyle: {
            fillOpacity: 0.7
          },
          appendPadding: 10,
          isPercent: true,
          yAxis: {
            label: {
              formatter: function (value) {
                return value * 100
              }
            }
          }
        }
      }
    ]
  }
]
