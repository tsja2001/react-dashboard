import { memo } from 'react'
import style from './Delete.module.scss'

const Delete = (props) => {
  const { onDrogDelete } = props

  const dropHandler = (event) => {
    event.preventDefault()
    event.stopPropagation()

    onDrogDelete?.(event)
  }

  return (
    <div
      className={style.area}
      onDrop={dropHandler}
      onDragOver={(event) => {
        event.preventDefault()
        event.stopPropagation()
      }}
    >
      拖拽到此处删除
    </div>
  )
}

export default memo(Delete)
