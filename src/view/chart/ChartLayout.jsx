import { createContext, memo } from 'react'
import style from './ChartLayout.module.scss'
import Header from './header/Header'
import { Outlet } from 'react-router-dom'

export const HomeChatContext = createContext()

const ChartLayout = () => {
  return (
    <div className={style.content}>
      <Header />
      <Outlet />
    </div>
  )
}

export default memo(ChartLayout)
