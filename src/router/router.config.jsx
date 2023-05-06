import NotFound from '@/view/notFound/NotFound'
import { Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { HomeLayout } from '@/layout/Home/HomeLayout'
import { BrowserRouter } from 'react-router-dom'
import DemoComponent from '@/component/demo'

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <Navigate to="/home" replace />
  // },
  {
    path: '/home',
    element: <HomeLayout />
    // errorElement: <NotFound />,
    // children: [
    //   {
    //     path: '/home/chart',
    //     element: <h1>chart</h1>
    //   },
    //   {
    //     path: '/home/dashboard',
    //     element: <h1>dashboard</h1>
    //   },
    //   {
    //     path: '/home/*',
    //     element: <Navigate to="/home/chart" />
    //   }
    // ]
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

export default router
