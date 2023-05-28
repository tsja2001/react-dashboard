import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// 跳转时候带上当前的 search 参数
export const useNavigateWithParams = () => {
  let navigate = useNavigate()
  let [searchParams] = useSearchParams()

  return function (to) {
    let newSearchParams = new URLSearchParams(searchParams)
    let search = newSearchParams.toString()

    navigate(`${to}?${search}`)
  }
}
