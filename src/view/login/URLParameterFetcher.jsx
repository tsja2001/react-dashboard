import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

export default function URLParameterFetcher() {
  const [searchParams] = useSearchParams()

  useEffect(() => {
    console.log('解析到路径参数:', Object.fromEntries(searchParams.entries()))

    // 执行token存储逻辑
  }, [searchParams])

  return (
    <div>
      <Navigate to="/home" />
    </div>
  )
}
