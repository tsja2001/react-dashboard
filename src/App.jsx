import { RouterProvider } from 'react-router-dom'
import style from './App.module.scss'
import LayoutMain from './layout/layout'
import router from './router/router-config'

function App() {
  return (
    <div className={style.content}>
      {/* <LayoutMain></LayoutMain> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
