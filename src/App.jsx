import { RouterProvider } from 'react-router-dom'
import { App as AntdAppContext, ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import { Suspense, useState } from 'react'
import zhCN from 'antd/locale/zh_CN'

import style from './App.module.scss'
import router from './router/router.config'
import store from './store'
import { theme } from 'antd'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  return (
    <div className={style.content}>
      {/* Antd的包裹组件 */}
      <ConfigProvider
        locale={zhCN}
        theme={{
          algorithm:
            themeMode === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm
        }}
      >
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
