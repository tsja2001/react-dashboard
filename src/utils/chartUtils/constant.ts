export const DIRECTIONS = {
  UP: 'up',
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'right'
}

// 行数, 列数
export const DASHBOARD_SIZE = [8, 6]

// 拖拽类型
export const DRAG_TYPE = {
  FROM_LIST: 'fromList', // 从预览列表中拉取
  FROM_DASHBOARD: 'fromDashboard', // 拖动dashboard内图表以调整位置
  RESIZE: 'resize' // 拖动bar来调整大小
}
