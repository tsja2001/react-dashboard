import React from 'react'
import {
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet
} from 'react-router-dom'
import HomeLayout from '@/view/home/HomeLayout'

import ChartLayout from '@/view/home/chart/ChartLayout'
import DashboardLayout from '@/view/home/dashboard/DashboardLayout'
// 组件懒加载
const Chart = React.lazy(() => import('@/view/chart/Chart'))
const Dashboard = React.lazy(() => import('@/view/dashboard/Dashboard'))
const NotFound = React.lazy(() => import('@/view/notFound/NotFound'))

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
        <Route path="/home/chart" element={<ChartLayout />} />
        <Route path="/home/dashboard" element={<DashboardLayout />} />
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
