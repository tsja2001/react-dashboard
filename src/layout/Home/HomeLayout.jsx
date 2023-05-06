// import { Link } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'

// const HomeLayout = () => {
//   return (
//     <div>
//       <h1>HomeLayout</h1>
//       <Link to="/home/chart">chart</Link>
//       <Link to="/home/dashboard">dashboard</Link>
//       <Outlet />
//     </div>
//   )
// }
// export default HomeLayout
import { Layout, Menu } from 'antd'
import siderbarConfig from '../siderbar-config'
import style from './HomeLayout.module.scss'
import { Outlet } from 'react-router-dom'

const { Header } = Layout

const App = () => {
  return (
    <Layout className={style.layout}>
      <Header className={style.header}>
        <div className={style.logo}>logo</div>
        <Menu
          className={style.menu}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['/chart']}
          items={siderbarConfig}
        />
      </Header>
      <div className={style.layout_layout}>
        <div className={style.content}>
          <Outlet />
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

export default App
