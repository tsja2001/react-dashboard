import { RouterProvider } from 'react-router-dom'
import { App as AntdAppContext, ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import { Suspense } from 'react'
import zhCN from 'antd/locale/zh_CN'

import style from './App.module.scss'
import router from './router/router.config'
import store from './store'

function App() {
  return (
    <div className={style.content}>
      {/* Antd的包裹组件 */}
      <ConfigProvider locale={zhCN}>
        <AntdAppContext>
          {/* react-redux的Provider */}
          <Provider store={store}>
            {/* 懒加载占位 */}
            <Suspense fallback="loading...">
              <RouterProvider router={router} />
            </Suspense>
          </Provider>
        </AntdAppContext>
      </ConfigProvider>
    </div>
  )
}

export default App
