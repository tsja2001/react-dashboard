// 删除对象中值为 undefined / null / 空对象 的键
// 目前用于@/view/chart/content/configureChart/chartConfig/ChartConfig.jsx
// 表单生成后, 对于为选择的选项, 生成的表单中不会有对应的键

export const cleanseObject = (obj) => {
  if (obj === null || obj === undefined) {
    return null
  }

  if (typeof obj !== 'object' || Array.isArray(obj)) {
    return obj
  }

  let keys = Object.keys(obj)
  for (let key of keys) {
    if (obj[key] === null || obj[key] === undefined) {
      delete obj[key]
    } else {
      obj[key] = cleanseObject(obj[key])
      if (typeof obj[key] === 'object' && Object.keys(obj[key]).length === 0) {
        delete obj[key]
      }
    }
  }

  if (obj?.legend?.visible === false) {
    obj.legend = false
  }

  return obj
}
