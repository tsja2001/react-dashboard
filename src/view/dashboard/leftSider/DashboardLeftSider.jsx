import { memo } from 'react'
import { chartDataList } from './chartDataList'
import style from './DashboardLeftSider.module.scss'

const DashboardLeftSider = (prop) => {
  const { onDragStart = () => {} } = prop

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
    </div>
  )
}

export default memo(DashboardLeftSider)
