import { Layout, Menu } from 'antd'
import style from './layout.module.scss'
import siderbarConfig from './siderbar-config'
const { Header, Content, Sider } = Layout

const LayoutMain = () => {
  return (
    <Layout className={style.layout}>
      <Sider className={style.sider}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['home']}
          className={style.layout.sider}
          items={siderbarConfig}
        />
      </Sider>
      <Content className={style.content}>
        <Layout className={style.content_layout}>
          <Header className={style.content_header}>header</Header>
          <Content className={style.content_content}>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}
export default LayoutMain
