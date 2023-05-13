import { memo } from 'react'
import style from './SelectData.module.scss'

const SelectData = () => {
  return (
    <div className={style.content}>
      <h2>SelectData</h2>
    </div>
  )
}

export default memo(SelectData)
