import { RouterProvider } from 'react-router-dom'
import style from './App.module.scss'
import router from './router/router.config'
import { Suspense } from 'react'

function App() {
  return (
    <div className={style.content}>
      <Suspense fallback="loading...">
        <RouterProvider router={router} />
      </Suspense>
    </div>
  )
}

export default App
