export default [
  {
    title: {
      visible: true,
      text: 'asada',
      size: 3
    },
    smooth: true,
    xAxis: {
      visible: true
    },
    chartName: '芜湖芜湖芜湖芜湖',
    chartType: 'Line',
    dataId: 'data_id_1',
    _id: 'chart_id_1'
  },
  {
    title: {
      visible: true,
      text: '文字大标题',
      size: 3
    },
    description: {
      visible: true,
      text: '描述内容显示, 描述内容显示描述内容显示, 描述内容显示描述内',
      strong: false
    },
    xAxis: {
      visible: true
    },
    chartName: '测试标题显示',
    chartType: 'Line',
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
    ],
    dataId: 'data_id_4',
    _id: 'chart_id_2'
  },
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
    dataId: 'data_id_1',
    _id: 'chart_id_3'
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
    dataId: 'data_id_4',
    _id: 'chart_id_4'
  },
  {
    title: {
      size: 3
    },
    xAxis: {
      visible: true
    },
    chartType: 'Line',
    dataId: 'data_id_2',
    _id: 'chart_id_5'
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
    dataId: 'data_id_1',
    _id: 'chart_id_6'
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
    dataId: 'data_id_4',
    _id: 'chart_id_7'
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
    dataId: 'data_id_4',
    _id: 'chart_id_8'
  },
  {
    title: {
      visible: false,
      text: '文字大标题',
      size: 3
    },
    description: {
      visible: false,
      text: '描述内容显示, 描述内容显示描述内容显示, 描述内容显示描述内',
      strong: false
    },
    legend: false,
    xAxis: {
      visible: true
    },
    chartName: '测试标题显示啊啊啊',
    chartType: 'Line',
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
    ],
    dataId: 'data_id_4',
    _id: 'chart_id_2'
  }
]
