import { memo, useRef } from 'react'
import { Radio } from 'antd'
import { cardSizeConfig } from '@/config/cardSizeConfig'

const CardSizeRadio = (props) => {
  const {
    changeHandler = () => {
      console.log('changeHandler 触发')
    },
    defaultValue = 'small',
    value
  } = props

  const isFristRender = useRef(true)

  if (defaultValue && isFristRender.current) {
    isFristRender.current = false
    const res = {
      target: {
        value: defaultValue
      }
    }
    changeHandler(res)
  }

  return (
    <div>
      <Radio.Group onChange={changeHandler} value={value}>
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
