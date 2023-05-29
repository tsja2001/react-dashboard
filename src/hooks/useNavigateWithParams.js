import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// 跳转时候带上当前的 search 参数
export const useNavigateWithParams = () => {
  let navigate = useNavigate()
  let [searchParams] = useSearchParams()

  return function (to, withParams = true) {
    let newSearchParams = new URLSearchParams(searchParams)
    let search = newSearchParams.toString()

    const url = withParams ? `${to}?${search}` : to

    navigate(url)
  }
}
