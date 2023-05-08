/**
 * 用于配制卡片的大小
 * 目前用于 src/view/home/chart/content/Content.jsx页面中
 * 未来用于 src/view/home/dashboard/content/Content.jsx页面中
 * colSpan: 网格布局, Antd.Col的span属性
 * height: 卡片的高度
 */
export const cardSizeConfig = {
  mini: {
    colSpan: 6,
    height: '27vh'
  },
  small: {
    colSpan: 8,
    height: '35vh'
  },
  medium: {
    colSpan: 12,
    height: '57vh'
  },
  large: {
    colSpan: 24,
    height: '60vh'
  }
}
