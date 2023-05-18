import { memo } from 'react'
import style from './ChartPreview.module.scss'

const ChartPreview = () => {
  return (
    <div className={style.context}>
      <h1>ChartPreview</h1>
    </div>
  )
}

export default memo(ChartPreview)
