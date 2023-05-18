import { memo } from 'react'
import style from './ChartConfig.module.scss'

const ChartConfig = () => {
  return (
    <div className={style.context}>
      <h1>ChartConfig</h1>
    </div>
  )
}

export default memo(ChartConfig)
