import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import style from './App.module.scss'
import router from './router/router.config'
import { Suspense } from 'react'
import store from './store'

function App() {
  return (
    <div className={style.content}>
      {/* react-redux的Provider */}
      <Provider store={store}>
        {/* 懒加载占位 */}
        <Suspense fallback="loading...">
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
    </div>
  )
}

export default App
