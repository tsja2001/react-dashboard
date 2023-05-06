const homeMenuConfig = [
  {
    label: '图表配置',
    key: '/home/chart'
  },
  {
    label: '大屏配置',
    key: '/home/dashboard'
  },
  {
    key: '/home/sub',
    label: '导航子选项',
    children: [
      {
        key: '/home/sub/1',
        label: '测试1'
      },
      {
        key: '/home/sub/2',
        label: '测试2'
      },
      {
        key: '/home/sub/3',
        label: '测试3'
      },
      {
        key: '/home/sub/4',
        label: '测试4'
      }
    ]
  }
]

export default homeMenuConfig
