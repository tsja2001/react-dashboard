import { Layout, Menu } from 'antd'
import style from './layout.module.scss'
import siderbarConfig from './siderbar-config'
const { Header, Content, Sider } = Layout
const LayoutMain = () => {
  // const {
  //   token: { colorBgContainer }
  // } = theme.useToken()
  return (
    <Layout className={style.layout}>
      <Sider
        style={{
          background: 'while',
          height: '100%'
        }}
        // width={200}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['home']}
          className={style.layout.sider}
          items={siderbarConfig}
        />
      </Sider>
      <Content>
        <Layout
          style={{
            height: '100%'
          }}
        >
          <Header className={style.header}>Header</Header>
          <Content>
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
