import { Layout, Menu } from 'antd'
import homeMenuConfig from './homeMenu.config'
import style from './HomeLayout.module.scss'
import { Outlet } from 'react-router-dom'
import router from '@/router/router.config'
import { memo } from 'react'

const { Header } = Layout

export const HomeLayout = () => {
  const menuClickHandler = (e) => {
    router.navigate(e.key)
  }
  console.log('-----')

  return (
    <Layout className={style.layout}>
      <Header className={style.header}>
        <div className={style.logo}>logo</div>
        <Menu
          className={style.menu}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['/home/chart']}
          items={homeMenuConfig}
          onClick={(e) => {
            menuClickHandler(e)
          }}
        />
      </Header>
      <div className={style.layout_layout}>
        <div className={style.content}>
          <h2>1aaaa</h2>
          <h2>2aaaa</h2>
          <h2>3aaaa</h2>
          <h2>4aaaa</h2>
          <h2>5aaaa</h2>
          <h2>6aaaa</h2>
          <h2>7aaaa</h2>
          <h2>8aaaa</h2>
          <h2>9aaaa</h2>
          <h2>10aaaa</h2>
          <h2>aaaa</h2>
          <h2>aaaa</h2>
          <h2>aaaa</h2>
          <h2>aaaa</h2>
          <h2>aaaa</h2>
          <h2>aaaa</h2>
          <h2>aaaa</h2>
          <h2>aaaa</h2>
          <h2>5aaaa</h2>
          <h2>4aaaa</h2>
          <h2>3aaaa</h2>
          <h2>2aaaa</h2>
          <h2>1aaaa</h2>
          <h2>0aaaa</h2>
        </div>
        <div className={style.footer}>云竹大屏 @ 2023</div>
      </div>
    </Layout>
  )
}

// export default memo(HomeLayout)
