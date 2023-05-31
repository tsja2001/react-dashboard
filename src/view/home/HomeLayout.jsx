import { Layout, Menu } from 'antd'
import homeMenuConfig from './homeMenu.config'
import style from './HomeLayout.module.scss'
import { Outlet } from 'react-router-dom'
import { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Switch } from 'antd'
import { Space } from 'antd'
import { changeTheme } from '@/store/features/global'
import { connect } from 'react-redux'

const { Header } = Layout

export const HomeLayout = (props) => {
  // 获取当前路由
  const location = useLocation()

  // 路由切换时, 设置当前选中的menu
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
      <Header className={style.header}>
        <div className={style.left}>
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
        </div>
        <div className={style.right}>
          <Space>
            <Switch
              checkedChildren="亮色"
              unCheckedChildren="暗色"
              defaultChecked
              checked={props.theme === 'light'}
              onChange={(checked) => {
                props.setTheme(checked ? 'light' : 'dark')
              }}
              size="default"
            />
            <Avatar
              className={style.avatar}
              size={40}
              icon={<UserOutlined />}
            />
          </Space>
        </div>
      </Header>
      <div className={style.layout_layout}>
        <div className={style.content}>
          <Outlet />
        </div>
        <div className={style.footer}>云竹大屏 @ 2023</div>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  theme: state.global.theme
})
const mapDispatchToProps = (dispatch) => ({
  setTheme: (theme) => dispatch(changeTheme(theme))
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(HomeLayout))
