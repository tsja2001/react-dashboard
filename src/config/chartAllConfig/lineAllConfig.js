export default {
  title: {
    visible: true,
    text: '折线图'
  },
  description: {
    visible: true,
    text: '一个简单的折线图'
  },
  legend: {
    flipPage: true,
    offsetX: -2,
    offsetY: -1
  },
  xAxis: {
    autoHideLabel: true,
    autoRotateLabel: true,
    autoRotateTitle: true,
    grid: {
      visible: true
    },
    label: {
      offset: 1,
      offsetX: 1,
      offsetY: 1
    },
    title: {
      text: 'x轴'
    }
  },
  yAxis: {
    autoHideLabel: true,
    autoRotateLabel: true,
    line: {
      visible: true
    },
    tickLine: {
      visible: true
    },
    label: {
      offset: 1,
      offsetX: 1,
      offsetY: 1
    },
    title: {
      text: 'yyyy'
    }
  },
  label: {
    visible: true,
    offset: 1,
    offsetX: 1,
    offsetY: 1
  },
  smooth: true,
  point: {
    visible: true,
    shape: 'hexagon'
  },
  forceFit: false,
  id: 'line_chart',
  color: ['#5B8FF9', '#5AD8A6']
}
