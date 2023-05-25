import { cleanseObject } from '../cleanseObject'

describe('cleanseObject', () => {
  it('should exclude fields with undefined values', () => {
    const obj = {
      name: 'Tom',
      age: undefined,
      job: 'engineer'
    }
    const expectedObj = {
      name: 'Tom',
      job: 'engineer'
    }
    expect(cleanseObject(JSON.parse(JSON.stringify(obj)))).toEqual(expectedObj)
  })

  it('should exclude fields with null values', () => {
    const obj = {
      name: 'Tom',
      age: null,
      job: 'engineer'
    }
    const expectedObj = {
      name: 'Tom',
      job: 'engineer'
    }
    expect(cleanseObject(JSON.parse(JSON.stringify(obj)))).toEqual(expectedObj)
  })

  it('should exclude empty objects', () => {
    const obj = {
      name: 'Tom',
      details: {},
      job: 'engineer'
    }
    const expectedObj = {
      name: 'Tom',
      job: 'engineer'
    }
    expect(cleanseObject(JSON.parse(JSON.stringify(obj)))).toEqual(expectedObj)
  })

  it('should exclude fields with undefined or null values in nested objects', () => {
    const obj = {
      name: 'Tom',
      details: {
        age: undefined
      },
      job: 'engineer'
    }
    const expectedObj = {
      name: 'Tom',
      job: 'engineer'
    }
    expect(cleanseObject(JSON.parse(JSON.stringify(obj)))).toEqual(expectedObj)
  })

  it('should work correctly with empty input object', () => {
    const obj = {}
    expect(cleanseObject(JSON.parse(JSON.stringify(obj)))).toEqual({})
  })
})
