export default {
  label: '单数据1(少量)',
  id: 'data_id_1',
  chartType: ['Bar:Single', 'Line', 'Area:Single', 'Column:Single', 'Pie:Bing'],
  chartConfig: {
    xField: 'key',
    yField: 'value',
    data: [
      { key: '1991', value: 2 },
      { key: '1992', value: 4 },
      { key: '1993', value: 3.5 },
      { key: '1994', value: 5 },
      { key: '1995', value: 4.9 },
      { key: '1996', value: 6 },
      { key: '1997', value: 7 },
      { key: '1998', value: 9 },
      { key: '1999', value: 13 }
    ]
  }
}
