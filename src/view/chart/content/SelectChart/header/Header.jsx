import { memo } from 'react'
import style from './Header.module.scss'
import Select from '../../cpns/select/Select'
import { Space, Input } from 'antd'
import CardSizeRadio from '@/component/form/cardSizeRadio/CardSizeRadio'

const Header = () => {
  const searchHandler = (value) => console.log(value)

  return (
    <div className={style.content}>
      <div className={style.left}>
        <Space>
          <Select />
          <Input.Search
            className={style.search}
            placeholder="搜索图表"
            onSearch={searchHandler}
          />
        </Space>
      </div>
      <div className={style.right}>
        <Space>
          <CardSizeRadio />
        </Space>
      </div>
    </div>
  )
}

export default memo(Header)
