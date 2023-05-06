import { Layout, Menu } from 'antd'
import style from './layout.module.scss'
import siderbarConfig from './Home/homeMenu.config'
import { RouterProvider } from 'react-router-dom'
import router from '../router/router.config'
const { Header, Content, Sider } = Layout

const LayoutMain = () => {
  const menuClickHandler = (e) => {
    const { key } = e

    router.navigate(key)
  }

  return (
    <Layout className={style.layout}>
      <Sider className={style.sider}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['home']}
          className={style.menu}
          items={siderbarConfig}
          onClick={(e) => {
            menuClickHandler(e)
          }}
        />
      </Sider>
      <Content className={style.content}>
        <Layout className={style.content_layout}>
          <Header className={style.content_header}>header</Header>
          <Content className={style.content_content}>
            <div className={style.content_content_inner}>
              <RouterProvider router={router} />
            </div>
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}
export default LayoutMain
