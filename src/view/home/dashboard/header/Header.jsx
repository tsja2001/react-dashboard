import { memo } from 'react'
import style from './Header.module.scss'
import { Button, Input } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const onSearch = (value) => console.log(value)
  return (
    <div className={style.content}>
      <div className={style.header}>
        <h1>大屏配置</h1>
      </div>
      <div className={style.query}>
        <div className={style.left}>
          <Input.Search
            className={style.search}
            placeholder="搜索图表"
            onSearch={onSearch}
          />
        </div>
        <div className={style.right}>
          <NavLink to="/dashboard">
            <Button icon={<PlusCircleOutlined />} type="primary">
              新建大屏
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default memo(Header)
