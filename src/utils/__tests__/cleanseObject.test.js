import { cleanseObject } from '../cleanseObject'

describe('cleanseObject', () => {
  it('传入对象为空', () => {
    expect(cleanseObject({})).toEqual({})
  })

  it('删除undedined null和空对象', () => {
    const obj = {
      title: '2',
      legend: {},
      smooth: undefined,
      xAxis: null
    }
    const expectedObj = {
      title: '2'
    }
    expect(cleanseObject(JSON.parse(JSON.stringify(obj)))).toEqual(expectedObj)
  })

  it('深层递归删除', () => {
    const obj = {
      title: {
        size: 3
      },
      legend: {
        visible: null,
        value: 'aaaa'
      },
      xAxis: {
        visible: undefined,
        label: {
          value: undefined,
          position: 'aaa'
        }
      }
    }
    const expectedObj = {
      title: {
        size: 3
      },
      legend: {
        value: 'aaaa'
      },
      xAxis: {
        label: {
          position: 'aaa'
        }
      }
    }
    expect(cleanseObject(JSON.parse(JSON.stringify(obj)))).toEqual(expectedObj)
  })

  it('当子属性都删完了, 父属也要被删除', () => {
    const obj = {
      title: {
        size: 3
      },
      legend: {},
      smooth: true,
      xAxis: {
        visible: {
          value: null
        },
        label: {}
      }
    }

    const expectedObj = {
      title: {
        size: 3
      },
      smooth: true
    }
    expect(cleanseObject(JSON.parse(JSON.stringify(obj)))).toEqual(expectedObj)
  })
})
