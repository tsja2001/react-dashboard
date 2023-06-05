import { useState, useEffect } from 'react'

// 判断是否为暗色模式, true-暗色模式, false-亮色模式
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    setMatches(mediaQuery.matches)

    const handler = (event) => setMatches(event.matches)
    mediaQuery.addListener(handler)

    return () => mediaQuery.removeListener(handler)
  }, [query])

  return matches
}
