const siderbarConfig = [
  {
    label: '首页',
    key: '/',
    icon: 'home'
  },
  {
    label: '图表配置',
    key: '/chart',
    path: ''
  },
  {
    label: '大屏配置',
    key: '/dashboard'
  },
  {
    key: '/nav1',
    label: 'subnav1',
    children: [
      {
        key: '/nav1/1',
        label: 'option1'
      },
      {
        key: '/nav1/2',
        label: 'option2'
      },
      {
        key: '/nav1/3',
        label: 'option3'
      },
      {
        key: '/nav1/4',
        label: 'option4'
      }
    ]
  },
  {
    key: '/nav2',
    label: 'subnav2',
    children: [
      {
        key: '/nav2/1',
        label: 'option1'
      },
      {
        key: '/nav2/2',
        label: 'option2'
      },
      {
        key: '/nav2/3',
        label: 'option3'
      },
      {
        key: '/nav2/4',
        label: 'option4'
      }
    ]
  },
  {
    key: '/nav3',
    label: 'subnav3',
    children: [
      {
        key: '/nav3/1',
        label: 'option1'
      },
      {
        key: '/nav3/2',
        label: 'option2'
      },
      {
        key: '/nav3/3',
        label: 'option3'
      },
      {
        key: '/nav3/4',
        label: 'option4'
      }
    ]
  }
]

export default siderbarConfig
