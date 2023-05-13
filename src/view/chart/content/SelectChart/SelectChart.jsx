import { memo } from 'react'
import style from './SelectChart.module.scss'

const SelectChart = () => {
  return (
    <div className={style.content}>
      <h2>SelectChart</h2>
    </div>
  )
}

export default memo(SelectChart)
