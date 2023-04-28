import { useState, useEffect } from 'react'
import { Scatter, G2 } from '@ant-design/charts'

// 注册主体有 point | interval | polygon | line 等，详细参考 G2: https://g2.antv.vision/
G2.registerShape('point', 'custom-shape', {
  draw(cfg, group) {
    const cx = cfg.x
    const cy = cfg.y
    const polygon = group.addShape('circle', {
      attrs: {
        x: cx,
        y: cy,
        ...cfg.defaultStyle,
        ...cfg.style,
        r: 6
      }
    })
    return polygon
  }
})
const DemoScatter = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    asyncFetch()
  }, [])
  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/3e4db10a-9da1-4b44-80d8-c128f42764a8.json'
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error)
      })
  }
  var config = {
    appendPadding: 30,
    data: data,
    xField: 'xG conceded',
    yField: 'Shot conceded',
    shape: 'custom-shape',
    pointStyle: { fillOpacity: 1, fill: 'red', stroke: '#ff0' },
    yAxis: {
      nice: true,
      line: { style: { stroke: '#aaa' } }
    },
    tooltip: {
      showMarkers: false,
      fields: ['xG conceded', 'Shot conceded']
    },
    xAxis: {
      grid: { line: { style: { stroke: '#eee' } } },
      line: { style: { stroke: '#aaa' } }
    }
  }
  return <Scatter {...config} />
}

export default DemoScatter
