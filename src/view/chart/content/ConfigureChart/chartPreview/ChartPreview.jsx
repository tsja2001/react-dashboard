import { memo, useContext } from 'react'
import style from './ChartPreview.module.scss'
import { ChartContext } from '@/view/chart/ChartLayout'

const ChartPreview = () => {
  const context = useContext(ChartContext)

  console.log('ChartPreview:', context)

  return (
    <div className={style.context}>
      <h1>ChartPreview</h1>
    </div>
  )
}

export default memo(ChartPreview)
