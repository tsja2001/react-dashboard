import Chart from '@/view/chart/Chart'
import Dashboard from '@/view/dashboard/Dashboard'
import Home from '@/view/home/Home'
import NotFound from '@/view/notFound/NotFound'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: '/chart',
    element: <Chart />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
])

export default router
