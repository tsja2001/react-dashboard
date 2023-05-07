import NotFound from '@/view/notFound/NotFound'
import { Navigate } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from '@/layout/Home/HomeLayout'
import { createRoutesFromElements } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Chart from '@/view/chart/Chart'
import Dashboard from '@/view/dashboard/Dashboard'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Outlet />}>
      <Route
        path="/"
        element={<Navigate to="/home" />}
        errorElement={<NotFound />}
      ></Route>
      <Route path="/home" element={<HomeLayout />} errorElement={<NotFound />}>
        <Route index element={<Navigate to="/home/chart" />} />
        <Route path="/home/chart" element={<h1>chart</h1>} />
        <Route path="/home/dashboard" element={<h1>dashboard</h1>} />
        <Route path="/home/*" element={<NotFound text="页面开发中..." />} />
      </Route>
      <Route path="/chart" element={<Chart />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/*" element={<NotFound text="页面不存在" />} />
    </Route>
  )
)

router.subscribe((location) => {
  console.log(location)
})

export default router
