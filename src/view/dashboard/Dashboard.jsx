import { memo } from 'react'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard的全屏页面</h1>
      <h3>此页面及子页面可能会有的功能: </h3>
      <ul>
        <li>Dashboard全屏显示页面</li>
        <li>Dashboard编辑页面</li>
        <li>Dashboard新建页面</li>
      </ul>
    </div>
  )
}

export default memo(Dashboard)
