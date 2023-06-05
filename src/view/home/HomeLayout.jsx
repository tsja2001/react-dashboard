import { memo, useEffect, useState } from 'react'
import { useNavigate, useLocation, Outlet } from 'react-router-dom'
import { Layout, Menu, Avatar, theme, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import DarkModeToggle from '@/component/darkModeToggle/DarkModeToggle'
import homeMenuConfig from './homeMenu.config'
import style from './HomeLayout.module.scss'

export const HomeLayout = () => {
  const { token } = theme.useToken()

  // 路由切换时, 设置当前选中的menu
  const location = useLocation()
  const [currentMeunActive, setCurrentMeunActive] = useState('/home/chart')

  useEffect(() => {
    setCurrentMeunActive(location.pathname)
  }, [location])

  // 切换menu时, 跳转路由
  const nav = useNavigate()
  const menuClickHandler = (e) => {
    nav(e.key)
  }

  return (
    <Layout className={style.layout}>
      <Layout.Header
        className={style.header}
        style={{ backgroundColor: token.colorBgContainer }}
      >
        <div className={style.left}>
          <div
            className={style.logo}
            style={{
              backgroundColor: token.colorTextPlaceholder,
              color: token.colorTextLightSolid
            }}
          >
            logo
          </div>
          <Menu
            className={style.menu}
            mode="horizontal"
            selectedKeys={[currentMeunActive]}
            items={homeMenuConfig}
            onClick={(e) => {
              menuClickHandler(e)
            }}
          />
        </div>
        <div className={style.right}>
          <DarkModeToggle />
          <Avatar className={style.avatar} size={40} icon={<UserOutlined />} />
        </div>
      </Layout.Header>
      <div className={style.layout_layout}>
        <div className={style.content}>
          <Outlet />
        </div>
        <div className={style.footer}>云竹大屏 @ 2023</div>
      </div>
    </Layout>
  )
}

export default memo(HomeLayout)
