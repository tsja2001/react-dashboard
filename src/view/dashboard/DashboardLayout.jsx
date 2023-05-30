import { memo } from 'react'
import style from './DashboardLayout.module.scss'

const DashboardLayout = () => {
  return (
    <div className={style.content}>
      <div className={style.left}>left</div>
      <div className={style.middle}>
        <div className={style.middel_content}></div>
      </div>
      <div className={style.right}>right</div>
    </div>
  )
}

export default memo(DashboardLayout)
