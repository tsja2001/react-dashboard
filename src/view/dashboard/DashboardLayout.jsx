import { memo } from 'react'
import style from './DashboardLayout.module.scss'
import DashboardContent from './content/DashboardContent'
import DashboardLeftSider from './leftSider/DashboardLeftSider'

const DashboardLayout = () => {
  return (
    <div className={style.content}>
      <div className={style.left}>
        <DashboardLeftSider />
      </div>
      <div className={style.middle}>
        <div className={style.middel_content}>
          <DashboardContent />
        </div>
      </div>
      <div className={style.right}>right</div>
    </div>
  )
}

export default memo(DashboardLayout)
