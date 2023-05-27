export default [
  {
    chartName: '自定义标题-折线图',
    title: {
      size: 3
    },
    smooth: true,
    xAxis: {
      visible: true
    },
    chartType: 'Line',
    dataId: 'data_id_1'
  },
  {
    chartName: '图表标题-柱状图',
    title: {
      size: 3
    },
    smooth: true,
    xAxis: {
      visible: true
    },
    chartType: 'Line',
    dataId: 'data_id_4'
  },
  {
    title: {
      size: 3
    },
    xAxis: {
      visible: true
    },
    chartType: 'Line',
    dataId: 'data_id_2'
  },
  {
    angleField: 'value',
    colorField: 'key',
    chartType: 'Pie',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      style: {
        fontSize: 14,
        textAlign: 'center'
      }
    },
    interactions: [
      {
        type: 'element-active'
      }
    ],
    dataId: 'data_id_1'
  },
  {
    title: {
      size: 3
    },
    xAxis: {
      visible: true
    },
    chartType: 'Column',
    isPercent: true,
    isStack: true,
    label: {
      position: 'middle',
      style: {
        fill: '#fff'
      }
    },
    dataId: 'data_id_4'
  },
  {
    title: {
      visible: true,
      text: '数据总预览',
      size: 3
    },
    description: {
      visible: true,
      text: '描述信息'
    },
    xAxis: {
      visible: true,
      title: {
        text: 'x轴内容'
      },
      label: {
        autoRotate: true,
        autoHide: true
      }
    },
    chartType: 'Area',
    dataId: 'data_id_4'
  }
]
