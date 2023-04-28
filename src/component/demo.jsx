import { memo } from 'react'

const DemoComponent = memo(() => {
  return <div>DemoComponent</div>
})

DemoComponent.displayName = 'DemoComponent'

export default DemoComponent
