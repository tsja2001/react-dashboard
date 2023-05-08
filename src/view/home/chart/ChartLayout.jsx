import { createContext, memo, useState } from 'react'
import style from './ChartLayout.module.scss'
import Header from './header/Header'
import Content from './content/Content'

export const HomeChatContext = createContext()

const ChartLayout = () => {
  const [cardSize, setCardSize] = useState('small')

  const contextState = {
    cardSize,
    setCardSize
  }

  return (
    <div className={style.content}>
      <HomeChatContext.Provider value={contextState}>
        <Header />
        <Content />
      </HomeChatContext.Provider>
    </div>
  )
}

export default memo(ChartLayout)
