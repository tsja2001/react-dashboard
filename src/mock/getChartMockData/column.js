export default {
  label: '单数据2(少量)',
  id: 'data_id_3',
  chartType: [
    'Column:Single',
    'Line',
    'Bar:Single',
    'Area:Single',
    'Pie:Bing',
    'Pie:Huan'
  ],
  chartConfig: {
    xField: 'key',
    yField: 'value',

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
        key: '家具家电',
        value: 38
      },
      {
        key: '粮油副食',
        value: 52
      },
      {
        key: '生鲜水果',
        value: 61
      },
      {
        key: '美容洗护',
        value: 145
      },
      {
        key: '母婴用品',
        value: 48
      },
      {
        key: '进口食品',
        value: 38
      },
      {
        key: '食品饮料',
        value: 38
      },
      {
        key: '家庭清洁',
        value: 38
      }
    ]
  }
}
