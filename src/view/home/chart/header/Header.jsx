import { memo } from 'react'
import { Radio, Space, Button, Input } from 'antd'
import { connect } from 'react-redux'
import { PlusCircleOutlined } from '@ant-design/icons'

import style from './Header.module.scss'
import { changeColumn } from '@/store/features/view/home/chart'
import { cardSizeConfig } from '@/config/cardSizeConfig'
import { NavLink } from 'react-router-dom'
import CardSizeRadio from '@/component/cardSizeRadio/CardSizeRadio'

const Header = (props) => {
  const { changeColumn, cardSize } = props

  const searchHandler = (value) => console.log(value)
  const radioChangeHandler = (e) => {
    for (let item of cardSizeConfig) {
      if (item.value === e.target.value) {
        changeColumn(item)
        break
      }
    }
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
            <CardSizeRadio
              changeHandler={radioChangeHandler}
              value={cardSize.value}
            />
            <NavLink to="/chart/select_data">
              <Button type="primary">
                <PlusCircleOutlined />
                新建图表
              </Button>
            </NavLink>
          </Space>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cardSize: state.viewHomeChart.cardSize
})
const mapDispatchToProps = (dispatch) => ({
  changeColumn: (value) => dispatch(changeColumn(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Header))
