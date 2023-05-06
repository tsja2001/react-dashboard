import { RouterProvider } from 'react-router-dom'
import style from './App.module.scss'
import router from './router/router.config'

function App() {
  return (
    <div className={style.content}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
