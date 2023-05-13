import { memo } from 'react'
import { Outlet } from 'react-router-dom'

const Content = () => {
  return (
    <div>
      <h2>Content</h2>
      <Outlet />
    </div>
  )
}

export default memo(Content)
