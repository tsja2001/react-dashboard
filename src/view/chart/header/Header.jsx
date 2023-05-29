import { Steps, Button } from 'antd'
import { memo, useEffect, useRef, useState } from 'react'

import style from './Header.module.scss'
import { useNavigateWithParams } from '@/hooks/useNavigateWithParams'
import { HomeOutlined } from '@ant-design/icons'
import { App } from 'antd'

const Header = () => {
  const navWithParams = useNavigateWithParams()
  const { modal } = App.useApp()

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

    navWithParams(`/chart/${router}`)
  }

  // 路由切换时, 设置当前选中的menu
  useEffect(() => {
    console.log('componentConfigRef.current', componentConfigRef.current)
    setCurrentIndex(
      componentConfigRef.current.findIndex((item) =>
        location.href.includes(item.router)
      )
    )
  }, [location.href])

  // 点击返回首页
  const goHomeHandler = () => {
    modal.confirm({
      title: '当前数据未保存, 是否确认返回首页?',
      onOk: () => {
        navWithParams('/', false)
      }
    })
  }

  return (
    <div className={style.content}>
      <Button onClick={goHomeHandler} icon={<HomeOutlined />}>
        回到首页
      </Button>
      <Steps
        type="navigation"
        current={currentIndex}
        onChange={onChange}
        className={style.steps}
        items={componentConfigRef.current}
      />
      <div></div>
    </div>
  )
}

export default memo(Header)
