export default [
  {
    type: 'Line',
    label: '折线图',
    presetList: [
      {
        label: '基础折线图',
        cpnName: 'Line',
        presetConf: {}
      },
      {
        label: '基础曲线图',
        cpnName: 'Line',
        presetConf: {
          smooth: true
        }
      },
      {
        label: '阶梯折线图',
        cpnName: 'Line',
        presetConf: {
          stepType: 'vh'
        }
      },
      {
        label: '折线点带有数据',
        cpnName: 'Line',
        presetConf: {
          point: {
            size: 5,
            shape: 'diamond',
            style: {
              fill: 'white',
              stroke: '#5B8FF9',
              lineWidth: 2
            }
          },
          label: {},
          type: 'Line',
          tooltip: {
            showMarkers: false
          },
          state: {
            active: {
              style: {
                shadowBlur: 4,
                stroke: '#000',
                fill: 'red'
              }
            }
          },
          interactions: [
            {
              type: 'marker-active'
            }
          ]
        }
      }
    ]
  }
]
