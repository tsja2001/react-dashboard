import { memo } from 'react'
import { Navigate } from 'react-router-dom'

const DemoComponent = memo(() => {
  return <Navigate to="/home" replace />
})

DemoComponent.displayName = 'DemoComponent'

export default DemoComponent
