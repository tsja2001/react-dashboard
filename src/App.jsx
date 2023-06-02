import { RouterProvider } from 'react-router-dom'
import { App as AntdAppContext, ConfigProvider } from 'antd'
import { connect } from 'react-redux'
import { Suspense, useEffect } from 'react'
import zhCN from 'antd/locale/zh_CN'

import style from './App.module.scss'
import router from './router/router.config'
import { theme } from 'antd'
import { changeTheme } from './store/features/global'
import { useMediaQuery } from './hooks/useMediaQuery'

function App(props) {
  // 获取系统主题
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  // 切换主题
  useEffect(() => {
    props.changeThemeDispatch(isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

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

const mapDispatchToProps = (dispatch) => ({
  changeThemeDispatch: (data) => {
    dispatch(changeTheme(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
