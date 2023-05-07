import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function RouteChangeListener() {
  const location = useLocation()
  console.log('1111')
  useEffect(() => {
    console.log('路由切换了', location.pathname)

    // 你可以在这里执行任何其他的操作，例如分析代码、设置标题等。
  }, [location])

  return <div>aaa</div>
}

export default RouteChangeListener
