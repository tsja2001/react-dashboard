import { useEffect } from 'react'
import { useSearchParams, Navigate } from 'react-router-dom'

// 用于解析URL中的参数, 然后跳转到/home页面
export default function URLParameterFetcher() {
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries())

    console.log('解析到路径参数:', params)

    // todo: 执行token存储逻辑...
  }, [searchParams])

  return <Navigate to="/home" />
}
