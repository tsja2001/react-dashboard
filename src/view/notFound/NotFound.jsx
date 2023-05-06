import router from '@/router/router.config'
import { Button } from 'antd'
import { memo, useEffect, useRef, useState } from 'react'

const NotFound = () => {
  const timeout = useRef(null)
  const [ifCancleNav, setIfCancleNav] = useState(false)

  // 返回上一级
  const navBack = () => {
    router.navigate(-1)
  }
  // 取消跳转
  const cancleNav = () => {
    setIfCancleNav(true)
    clearTimeout(timeout.current)
  }

  useEffect(() => {
    timeout.current = setTimeout(() => {
      navBack()
    }, 2000)

    return () => {
      clearTimeout(timeout.current)
    }
  }, [])

  return (
    <div>
      <h1>Page NotFound</h1>
      {ifCancleNav ? <h1>取消跳转</h1> : <h1>12秒后自动跳转</h1>}

      <Button onClick={() => navBack()} type="primary">
        返回上一页面
      </Button>
      <Button onClick={() => cancleNav()}>取消跳转</Button>
    </div>
  )
}

export default memo(NotFound)
