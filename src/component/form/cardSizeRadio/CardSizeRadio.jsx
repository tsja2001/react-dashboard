import { memo } from 'react'
import { cardSizeConfig } from './cardSizeConfig'
import { Radio } from 'antd'

const CardSizeRadio = (props) => {
  const {
    changeHandler = () => {
      console.log('changeHandler 触发')
    },
    value = 'small'
  } = props

  return (
    <div>
      <Radio.Group onChange={changeHandler} value={value} defaultValue="small">
        {cardSizeConfig.map((item) => (
          <Radio.Button key={item.value} value={item.value}>
            {item.label}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  )
}

export default memo(CardSizeRadio)
