// const { mergeObjects } = require('../index')
import { mergeObjects } from '../mergeObjects.js'

describe('mergeObjects', () => {
  test('key不同直接合并', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { c: 3, d: 4 }
    const result = mergeObjects(obj1, obj2)
    expect(result).toEqual({ a: 1, b: 2, c: 3, d: 4 })
  })

  test('key相同时, 以第一个对象为优先', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 3, d: 4 }
    const result = mergeObjects(obj1, obj2)
    expect(result).toEqual({ a: 1, b: 2, d: 4 })
  })

  test('深层key不同, 直接合并', () => {
    const obj1 = { a: 1, b: { c: 2, d: 3 } }
    const obj2 = { e: 4, f: { g: 5, h: 6 } }
    const result = mergeObjects(obj1, obj2)
    expect(result).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4, f: { g: 5, h: 6 } })
  })

  test('深层key相同时, 第一个对象优先', () => {
    const obj1 = { a: 1, b: { c: 2, d: 3 } }
    const obj2 = { a: 4, b: { e: 5, d: 4 } }
    const result = mergeObjects(obj1, obj2)
    expect(result).toEqual({ a: 1, b: { c: 2, d: 3, e: 5 } })
  })

  test('更深层', () => {
    const obj1 = {
      a: 1,
      b: {
        c: 2,
        d: 3,
        e: {
          f: 1,
          g: 2
        }
      }
    }
    const obj2 = {
      a: 4,
      b: {
        e: 5,
        d: 4,
        e: {
          f: 3,
          h: 4
        }
      }
    }
    const result = mergeObjects(obj1, obj2)
    expect(result).toEqual({
      a: 1,
      b: {
        c: 2,
        d: 3,
        e: {
          f: 1,
          g: 2,
          h: 4
        }
      }
    })
  })
})
