import { cloneDeep } from 'lodash'

// 删除对象中值为 undefined / null / 空对象 的键
// 目前用于@/view/chart/content/configureChart/chartConfig/ChartConfig.jsx
// 表单生成后, 对于为选择的选项, 生成的表单中不会有对应的键
export const cleanseObject = (obj) => {
  const map = (obj) => {
    Object.keys(obj).forEach((key) => {
      if (obj[key] === undefined || obj[key] === null) {
        delete obj[key]
      } else if (typeof obj[key] === 'object') {
        if (Object.keys(obj[key]).length === 0) {
          delete obj[key]
        } else {
          map(obj[key])
        }
      }
    })
  }

  const deepCloneobj = cloneDeep(obj)
  map(deepCloneobj)

  return deepCloneobj
}
