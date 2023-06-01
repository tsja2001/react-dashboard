export default {
  label: '分组数据1(少量)',
  id: 'data_id_4',
  chartType: ['Column:Group', 'Line', 'Bar:Group', 'Area:Group'],
  tableConfig: {
    // 分组数据需要此属性
    options: {
      hierarchyType: 'grid'
    },
    dataCfg: {
      fields: {
        rows: ['key', 'type'],
        values: ['value']
      },
      meta: [
        { field: 'key', name: '城市' },
        { field: 'value', name: '销售额(万元)' },
        { field: 'type', name: '产品' }
      ]
    }
  },
  chartConfig: {
    xField: 'key',
    yField: 'value',
    seriesField: 'type',
    meta: {
      key: {
        alias: '城市'
      },
      type: {
        alias: '产品'
      },
      value: {
        alias: '销售额(万元)'
      }
    },
    data: [
      {
        key: '石家庄',
        type: '水果',
        value: 14500
      },
      {
        key: '石家庄',
        type: '米面',
        value: 8500
      },
      {
        key: '石家庄',
        type: '特产零食',
        value: 10000
      },
      {
        key: '石家庄',
        type: '茶叶',
        value: 7000
      },
      {
        key: '深圳',
        type: '水果',
        value: 9000
      },
      {
        key: '深圳',
        type: '米面',
        value: 8500
      },
      {
        key: '深圳',
        type: '特产零食',
        value: 11000
      },
      {
        key: '深圳',
        type: '茶叶',
        value: 6000
      },
      {
        key: '温州',
        type: '水果',
        value: 16000
      },
      {
        key: '温州',
        type: '米面',
        value: 5000
      },
      {
        key: '温州',
        type: '特产零食',
        value: 6000
      },
      {
        key: '温州',
        type: '茶叶',
        value: 10000
      },
      {
        key: '宁波',
        type: '水果',
        value: 14000
      },
      {
        key: '宁波',
        type: '米面',
        value: 9000
      },
      {
        key: '宁波',
        type: '特产零食',
        value: 10000
      },
      {
        key: '宁波',
        type: '茶叶',
        value: 9000
      },
      {
        key: '无锡',
        type: '水果',
        value: 14000
      },
      {
        key: '无锡',
        type: '米面',
        value: 9000
      },
      {
        key: '无锡',
        type: '特产零食',
        value: 10000
      },
      {
        key: '无锡',
        type: '茶叶',
        value: 6000
      },
      {
        key: '杭州',
        type: '水果',
        value: 9000
      },
      {
        key: '杭州',
        type: '米面',
        value: 8500
      },
      {
        key: '杭州',
        type: '特产零食',
        value: 10000
      },
      {
        key: '杭州',
        type: '茶叶',
        value: 6000
      },
      {
        key: '北京',
        type: '水果',
        value: 17000
      },
      {
        key: '北京',
        type: '米面',
        value: 6000
      },
      {
        key: '北京',
        type: '特产零食',
        value: 7000
      },
      {
        key: '北京',
        type: '茶叶',
        value: 10000
      },
      {
        key: '上海',
        type: '水果',
        value: 18000
      },
      {
        key: '上海',
        type: '米面',
        value: 11000
      },
      {
        key: '上海',
        type: '特产零食',
        value: 15000
      },
      {
        key: '上海',
        type: '茶叶',
        value: 14000
      }
    ]
  }
}
