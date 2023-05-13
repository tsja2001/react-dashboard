import { Steps } from 'antd'
import { memo, useState } from 'react'
import style from './Header.module.scss'

const Header = () => {
  const [current, setCurrent] = useState(0)

  const onChange = (value) => {
    console.log('onChange:', value)
    setCurrent(value)
  }

  return (
    <div className={style.content}>
      <Steps
        type="navigation"
        current={current}
        onChange={onChange}
        className={style.steps}
        items={[
          {
            status: 'finish',
            title: '选择数据'
          },
          {
            status: 'process',
            title: '选择图表'
          },
          {
            status: 'wait',
            title: '配置图表'
          }
        ]}
      />
    </div>
  )
}
export default memo(Header)
