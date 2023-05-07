import { Layout, Menu } from 'antd'
import homeMenuConfig from './homeMenu.config'
import style from './HomeLayout.module.scss'
import { Outlet } from 'react-router-dom'
import { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const { Header } = Layout

export const HomeLayout = () => {
  let menuClickHandler = null

  // 获取当前路由
  const location = useLocation()

  // 路由切换时, 设置当前选中的menu
  const [currentMeunActive, setCurrentMeunActive] = useState('/home/chart')

  useEffect(() => {
    setCurrentMeunActive(location.pathname)
  }, [location])

  // 切换menu时, 跳转路由
  const nav = useNavigate()
  menuClickHandler = (e) => {
    nav(e.key)
  }

  return (
    <Layout className={style.layout}>
      <Header className={style.header}>
        <div className={style.logo}>logo</div>
        <Menu
          className={style.menu}
          theme="dark"
          mode="horizontal"
          selectedKeys={[currentMeunActive]}
          items={homeMenuConfig}
          onClick={(e) => {
            menuClickHandler(e)
          }}
        />
      </Header>
      <div className={style.layout_layout}>
        <div className={style.content}>
          <Outlet />
          {currentMeunActive}
          {JSON.stringify(currentMeunActive === '/home/dashboard')}
          <h2>1aaaa</h2>
        </div>
        <div className={style.footer}>云竹大屏 @ 2023</div>
      </div>
    </Layout>
  )
}

export default memo(HomeLayout)
