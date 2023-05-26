import { Steps } from 'antd'
import { memo, useEffect, useRef, useState } from 'react'
import style from './Header.module.scss'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Header = (props) => {
  const nav = useNavigate()

  const [currentIndex, setCurrentIndex] = useState(0)
  const componentConfigRef = useRef([
    {
      title: '选择数据',
      router: 'select_data'
    },
    {
      title: '选择图表',
      router: 'select_chart'
    },
    {
      title: '配置图表',
      router: 'configure_chart'
    }
  ])

  const onChange = (value) => {
    setCurrentIndex(value)
    const router = componentConfigRef.current[value].router
    nav(`/chart/${router}`)
  }

  // 获取当前路由
  const location = useLocation()
  // 路由切换时, 设置当前选中的menu
  useEffect(() => {
    setCurrentIndex(
      componentConfigRef.current.findIndex(
        (item) => item.router === location.pathname.split('/')[2]
      )
    )
  }, [location])

  return (
    <div className={style.content}>
      <Steps
        type="navigation"
        current={currentIndex}
        onChange={onChange}
        className={style.steps}
        items={componentConfigRef.current}
      />
    </div>
  )
}

export default memo(Header)
