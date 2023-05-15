export default [
  {
    type: 'Area',
    label: '面积图',
    presetList: [
      {
        label: '基础面积图',
        presetConf: {}
      },
      {
        label: '渐变色面积图',
        presetConf: {
          areaStyle: {
            fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff'
          }
        }
      },
      {
        label: '百分比堆叠面积图',
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
