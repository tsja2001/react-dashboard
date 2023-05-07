import NotFound from '@/view/notFound/NotFound'
import { Navigate } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from '@/layout/Home/HomeLayout'
import DemoComponent from '@/component/demo'

const router = createBrowserRouter([
  {
    // 跟路径, 重定向到Home
    path: '/',
    element: <Navigate to="/home" replace />
  },
  {
    path: '/home',
    element: <HomeLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/home/chart',
        element: <h1>chart</h1>
      },
      {
        path: '/home/dashboard',
        element: <h1>dashboard</h1>
      }
    ]
  },
  {
    path: '/home/*',
    element: <Navigate to="/home/chart" replace />
  },
  {
    path: '/chart',
    element: <h1>chart</h1>
  },
  {
    path: '/dashboard',
    element: <h1>dashboard</h1>
  },
  {
    path: '/demo',
    element: <DemoComponent></DemoComponent>
  },
  {
    path: '/*',
    element: <NotFound />
  }
])

router.subscribe((location) => {
  console.log(location)
})

export default router
