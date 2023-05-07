import { memo } from 'react'
import style from './Header.module.scss'
import { Button, Input } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'

const Header = () => {
  const onSearch = (value) => console.log(value)
  return (
    <div className={style.content}>
      <div className={style.header}>
        <h1>图表配置</h1>
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
          <Button icon={<PlusCircleOutlined />} type="primary">
            新建图表
          </Button>
        </div>
      </div>
    </div>
  )
}

export default memo(Header)
