import { memo, useRef } from 'react'
import style from './DashboardLayout.module.scss'
import DashboardContent from './content/DashboardContent'
import DashboardLeftSider from './leftSider/DashboardLeftSider'
import useDimensions from '@/hooks/useDimensions'

const DashboardLayout = () => {
  const dashboardCpnRef = useRef(null)
  const dashboardContentRef = useRef(null)

  // 获取图表区域的宽高
  const dashboardContentSize = useDimensions(dashboardContentRef)

  console.log('dashboardContentSize', dashboardContentSize)

  return (
    <div className={style.content}>
      <div className={style.left}>
        <DashboardLeftSider
          onDragStart={(event, item) => {
            dashboardCpnRef.current.dragChartStartFromList(event, item)
          }}
          onDrogDelete={() => {
            dashboardCpnRef.current.onDrogDelete()
          }}
        />
      </div>
      <div className={style.middle}>
        <div className={style.middel_content} ref={dashboardContentRef}>
          <div className={style.middle_inner} style={dashboardContentSize}>
            <DashboardContent ref={dashboardCpnRef} />
          </div>
        </div>
      </div>
      <div className={style.right}>right</div>
    </div>
  )
}

export default memo(DashboardLayout)
