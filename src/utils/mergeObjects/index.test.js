import { mergeObjects } from '.'

describe('mergeObjects function', () => {
  test('should merge objects correctly without conflict', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { c: 3, d: 4 }
    const result = mergeObjects(obj1, obj2)
    expect(result).toEqual({ a: 1, b: 2, c: 3, d: 4 })
  })

  test('should merge objects correctly with conflict, preference given to first object', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 3, d: 4 }
    const result = mergeObjects(obj1, obj2)
    expect(result).toEqual({ a: 1, b: 2, d: 4 })
  })

  test('should merge objects correctly without conflict on deep properties', () => {
    const obj1 = { a: 1, b: { c: 2, d: 3 } }
    const obj2 = { e: 4, f: { g: 5, h: 6 } }
    const result = mergeObjects(obj1, obj2)
    expect(result).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4, f: { g: 5, h: 6 } })
  })

  test('should merge objects correctly with conflict on deep properties, preference given to first object', () => {
    const obj1 = { a: 1, b: { c: 2, d: 3 } }
    const obj2 = { a: 4, b: { e: 5 } }
    const result = mergeObjects(obj1, obj2)
    expect(result).toEqual({ a: 1, b: { c: 2, d: 3 } })
  })
})
