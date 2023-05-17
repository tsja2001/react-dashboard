import React from 'react'
import {
  Navigate,
  createRoutesFromElements,
  Route,
  Outlet
} from 'react-router-dom'
import HomeLayout from '@/view/home/HomeLayout'

import ChartLayout from '@/view/home/chart/ChartLayout'
import DashboardLayout from '@/view/home/dashboard/DashboardLayout'
import SelectData from '@/view/chart/content/selectData/SelectData'
import SelectChart from '@/view/chart/content/selectChart/SelectChart'
import ConfigureChart from '@/view/chart/content/configureChart/ConfigureChart'
import URLParameterFetcher from '@/view/login/URLParameterFetcher'
import { createHashRouter } from 'react-router-dom'
// 组件懒加载
const ChartEdit = React.lazy(() => import('@/view/chart/ChartLayout'))
const Dashboard = React.lazy(() => import('@/view/dashboard/Dashboard'))
const NotFound = React.lazy(() => import('@/view/notFound/NotFound'))

const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<Outlet />} errorElement={<NotFound text="Oop!出错了" />}>
      {/* 对跟路径请求, 去解析url携带的参数 */}
      <Route
        path="/"
        element={<URLParameterFetcher />}
        errorElement={<NotFound />}
      >
        <Route index element={<Navigate to="/home" />} />
        <Route path="/:params" element={<URLParameterFetcher />} />
      </Route>
      {/* 首页 */}
      <Route path="/home" element={<HomeLayout />} errorElement={<NotFound />}>
        <Route index element={<Navigate to="/home/chart" />} />
        <Route path="/home/chart" element={<ChartLayout />} />
        <Route path="/home/dashboard" element={<DashboardLayout />} />
        <Route path="/home/*" element={<NotFound text="页面开发中..." />} />
      </Route>
      {/* 图表编辑页面 */}
      <Route path="/chart" element={<ChartEdit />}>
        <Route index element={<Navigate to="/chart/select_data" />} />
        <Route path="/chart/select_data" element={<SelectData />} />
        <Route path="/chart/select_chart" element={<SelectChart />} />
        <Route path="/chart/configure_chart" element={<ConfigureChart />} />
        <Route path="/chart/*" element={<NotFound text="页面不存在..." />} />
      </Route>
      {/* 大屏编辑页面 */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/*" element={<NotFound text="页面不存在" />} />
    </Route>
  )
)

export default router
