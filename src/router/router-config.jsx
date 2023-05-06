import HomeLayout from '@/layout/Home/HomeLayout'
// import Chart from '@/view/chart/Chart'
import Dashboard from '@/view/dashboard/Dashboard'
import Home from '@/view/home/Home'
import NotFound from '@/view/notFound/NotFound'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" replace />
  },
  {
    path: '/home',
    element: <HomeLayout />,
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
    path: '/chart',
    element: <h1>chart</h1>
  },
  {
    path: '/dashboard',
    element: <h1>dashboard</h1>
  }
])

export default router
