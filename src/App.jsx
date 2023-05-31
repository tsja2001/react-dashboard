import { RouterProvider } from 'react-router-dom'
import { App as AntdAppContext, ConfigProvider } from 'antd'
import { Provider, connect } from 'react-redux'
import { Suspense } from 'react'
import zhCN from 'antd/locale/zh_CN'

import style from './App.module.scss'
import router from './router/router.config'
import { theme } from 'antd'

function App(props) {
  const { themeMode } = props

  return (
    <div className={style.content}>
      {/* Antd的包裹组件 */}
      <ConfigProvider
        locale={zhCN}
        theme={{
          algorithm:
            props.themeMode === 'light'
              ? theme.defaultAlgorithm
              : theme.darkAlgorithm
        }}
      >
        <AntdAppContext>
          {/* 懒加载占位 */}
          <Suspense fallback="loading...">
            <RouterProvider router={router} />
          </Suspense>
        </AntdAppContext>
      </ConfigProvider>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    themeMode: state.global.theme
  }
}

export default connect(mapStateToProps)(App)
