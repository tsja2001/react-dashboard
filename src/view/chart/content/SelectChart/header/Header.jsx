import { memo } from 'react'
import style from './Header.module.scss'
import Select from '../../cpns/select/Select'
import { Space, Input } from 'antd'
import CardSizeRadio from '@/component/cardSizeRadio/CardSizeRadio'
import { changeColumn } from '@/store/features/view/chart'
import { connect } from 'react-redux'
import { cardSizeConfig } from '@/config/cardSizeConfig'

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
          <CardSizeRadio
            changeHandler={radioChangeHandler}
            value={cardSize.value}
            defaultValue="mini"
          />
        </Space>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cardSize: state.viewChart.cardSize
})
const mapDispatchToProps = (dispatch) => ({
  changeColumn: (value) => dispatch(changeColumn(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Header))
