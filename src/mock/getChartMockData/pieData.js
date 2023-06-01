export default {
  label: '饼图mock数据',
  id: 'data_id_5',
  chartType: ['Pie:Bing', 'Pie:Huan'],
  chartConfig: {
    angleField: 'value',
    colorField: 'key',
    meta: {
      key: {
        alias: '分类'
      },
      value: {
        alias: '销售额(万元)'
      }
    },
    data: [
      {
        key: '分类一',
        value: 27
      },
      {
        key: '分类二',
        value: 25
      },
      {
        key: '分类三',
        value: 18
      },
      {
        key: '分类四',
        value: 15
      },
      {
        key: '分类五',
        value: 10
      },
      {
        key: '其他',
        value: 5
      }
    ]
  }
}
