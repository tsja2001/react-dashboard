import { memo } from 'react'
import { Radio, Space, Button, Input } from 'antd'
import { connect } from 'react-redux'
import { PlusCircleOutlined } from '@ant-design/icons'

import style from './Header.module.scss'
import { changeColumn } from '@/store/features/view/home/chart'

const Header = (props) => {
  const { changeColumn } = props

  const searchHandler = (value) => console.log(value)
  const radioChangeHandler = (e) => {
    changeColumn(e.target.value)
  }

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
            onSearch={searchHandler}
          />
        </div>
        <div className={style.right}>
          <Space>
            <Radio.Group onChange={radioChangeHandler} defaultValue="small">
              <Radio.Button value="large">单列</Radio.Button>
              <Radio.Button value="medium">双列</Radio.Button>
              <Radio.Button value="small">三列</Radio.Button>
              <Radio.Button value="mini">四列</Radio.Button>
            </Radio.Group>
            <Button icon={<PlusCircleOutlined />} type="primary">
              新建图表
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  changeColumn: (value) => dispatch(changeColumn(value))
})

export default connect(null, mapDispatchToProps)(memo(Header))
