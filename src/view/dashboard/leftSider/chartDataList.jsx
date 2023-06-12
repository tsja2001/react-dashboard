// 用于测试的静态数据, 后续修改为动态

import { Line, Pie, Column } from '@ant-design/charts'

const PieDemo = () => {
  const data = [
    {
      type: '分类一',
      value: 27
    },
    {
      type: '分类二',
      value: 25
    },
    {
      type: '分类三',
      value: 18
    },
    {
      type: '分类四',
      value: 15
    },
    {
      type: '分类五',
      value: 10
    },
    {
      type: '其他',
      value: 5
    }
  ]
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
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
  return <Pie {...config} />
}
const ColumnDemo = () => {
  const data = [
    {
      name: 'London',
      月份: 'Jan.',
      月均降雨量: 18.9
    },
    {
      name: 'London',
      月份: 'Feb.',
      月均降雨量: 28.8
    },
    {
      name: 'London',
      月份: 'Mar.',
      月均降雨量: 39.3
    },
    {
      name: 'London',
      月份: 'Apr.',
      月均降雨量: 81.4
    },
    {
      name: 'London',
      月份: 'May',
      月均降雨量: 47
    },
    {
      name: 'London',
      月份: 'Jun.',
      月均降雨量: 20.3
    },
    {
      name: 'London',
      月份: 'Jul.',
      月均降雨量: 24
    },
    {
      name: 'London',
      月份: 'Aug.',
      月均降雨量: 35.6
    },
    {
      name: 'Berlin',
      月份: 'Jan.',
      月均降雨量: 12.4
    },
    {
      name: 'Berlin',
      月份: 'Feb.',
      月均降雨量: 23.2
    },
    {
      name: 'Berlin',
      月份: 'Mar.',
      月均降雨量: 34.5
    },
    {
      name: 'Berlin',
      月份: 'Apr.',
      月均降雨量: 99.7
    },
    {
      name: 'Berlin',
      月份: 'May',
      月均降雨量: 52.6
    },
    {
      name: 'Berlin',
      月份: 'Jun.',
      月均降雨量: 35.5
    },
    {
      name: 'Berlin',
      月份: 'Jul.',
      月均降雨量: 37.4
    },
    {
      name: 'Berlin',
      月份: 'Aug.',
      月均降雨量: 42.4
    }
  ]
  const config = {
    data,
    isGroup: true,
    xField: '月份',
    yField: '月均降雨量',
    seriesField: 'name'

    /** 设置颜色 */
    //color: ['#1ca9e6', '#f88c24'],

    /** 设置间距 */
    // marginRatio: 0.1,
    // label: {
    //   // 可手动配置 label 数据标签位置
    //   position: 'middle',
    //   // 'top', 'middle', 'bottom'
    //   // 可配置附加的布局方法
    //   layout: [
    //     // 柱形图数据标签位置自动调整
    //     {
    //       type: 'interval-adjust-position'
    //     }, // 数据标签防遮挡
    //     {
    //       type: 'interval-hide-overlap'
    //     }, // 数据标签文颜色自动调整
    //     {
    //       type: 'adjust-color'
    //     }
    //   ]
    // }
  }
  return <Column {...config} />
}
const LineDemo = () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 }
  ]

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    autoFit: true,
    point: {
      size: 5,
      shape: 'diamond'
    }
  }
  return <Line {...config} />
}

export const chartDataList = [
  {
    id: 1,
    name: 'LineDemo Chart 1111',
    chart: <LineDemo />
  },
  {
    id: 2,
    name: 'ColumnDemo Chart 2',
    chart: <ColumnDemo />
  },
  {
    id: 3,
    name: 'PieDemo Chart 3',
    chart: <PieDemo />
  }
]
