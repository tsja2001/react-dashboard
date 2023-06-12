/* eslint-disable react/prop-types */
import { memo } from 'react'
import style from './DragBar.module.scss'
import { DIRECTIONS } from '@/utils/chartUtils/constant'

const DragBar = (props) => {
  return (
    <div className={style.content}>
      <div
        onDragStart={(event) => props.onDragStart(event, DIRECTIONS.UP)}
        draggable={true}
        className={`${style.dragBar} ${style.dragBarTop}`}
      >
        ⬆️
      </div>
      <div
        onDragStart={(event) => props.onDragStart(event, DIRECTIONS.RIGHT)}
        draggable={true}
        className={`${style.dragBar} ${style.dragBarRight}`}
      >
        ➡️
      </div>
      <div
        onDragStart={(event) => props.onDragStart(event, DIRECTIONS.DOWN)}
        draggable={true}
        className={`${style.dragBar} ${style.dragBarBotton}`}
      >
        ⬇️
      </div>
      <div
        onDragStart={(event) => props.onDragStart(event, DIRECTIONS.LEFT)}
        draggable={true}
        className={`${style.dragBar} ${style.dragBarLeft}`}
      >
        ⬅️
      </div>
    </div>
  )
}

export default memo(DragBar)
