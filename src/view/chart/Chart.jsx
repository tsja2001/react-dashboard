import { memo } from 'react'

const Chart = () => {
  return (
    <div>
      <h1>Chart的全屏页面</h1>
      <h3>此页面及子页面可能会有的功能: </h3>
      <ul>
        <li>Chart编辑页面</li>
        <li>Chart新建页面</li>
      </ul>
    </div>
  )
}

export default memo(Chart)
