import { cloneDeep } from 'lodash'

export const mergeObjects = (primary_obj, secondary_obj) => {
  const res = cloneDeep(primary_obj)
  const source = cloneDeep(secondary_obj)

  Object.keys(source).forEach((key) => {
    // 如果有相同的key
    if (Object.keys(res).includes(key)) {
      // 如果res[key]是对象
      if (typeof res[key] === 'object' && typeof source[key] !== 'object') {
        //
      } else if (
        typeof res[key] === 'object' &&
        typeof source[key] === 'object'
      ) {
        res[key] = mergeObjects(res[key], source[key])
      }
    } else {
      res[key] = source[key]
    }
  })

  return res
}
