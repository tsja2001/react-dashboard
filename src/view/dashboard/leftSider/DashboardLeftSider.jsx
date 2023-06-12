import { memo } from 'react'
import { chartDataList } from './chartDataList'
import style from './DashboardLeftSider.module.scss'
import Delete from '../cpns/delete/Delete'

const DashboardLeftSider = (prop) => {
  const { onDragStart = () => {}, onDrogDelete = () => {} } = prop

  return (
    <div className={style.chartList}>
      {chartDataList.map((item, index) => (
        <div
          id={item.id}
          key={index}
          className={style.item}
          onDragStart={(event) => onDragStart(event, item)}
          draggable={true}
        >
          <span>{item.name}</span>
        </div>
      ))}
      <Delete onDrogDelete={onDrogDelete} />
    </div>
  )
}

export default memo(DashboardLeftSider)
