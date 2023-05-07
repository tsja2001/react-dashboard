import { Button } from 'antd'
import { memo, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './NotFound.module.scss'
import PropTypes from 'prop-types'

const NotFound = ({ text }) => {
  const timeout = useRef(null)
  const nav = useNavigate()
  const [ifCancleNav, setIfCancleNav] = useState(false)

  // 返回上一级
  const navBack = () => {
    nav(-1)
  }

  // 取消跳转
  const cancleNav = () => {
    setIfCancleNav(true)
    clearTimeout(timeout.current)
  }

  // 按下esc键, 取消跳转
  const keydownHandler = (e) => {
    if (e.key === 'Escape') {
      cancleNav()
    }
  }

  useEffect(() => {
    timeout.current = setTimeout(() => {
      navBack()
    }, 3000)

    // 监听esc键
    document.addEventListener('keydown', keydownHandler)

    return () => {
      clearTimeout(timeout.current)
      document.removeEventListener('keydown', keydownHandler)
    }
  }, [])

  return (
    <div className={style.content}>
      <h1>{text ?? 'Page NotFound'}</h1>
      {ifCancleNav ? <h2>已取消跳转</h2> : <h2>3秒后自动跳转到上一页</h2>}

      <div className={style.button_box}>
        <Button onClick={() => navBack()} type="primary">
          返回上一页面
        </Button>
        <Button onClick={() => cancleNav()}>取消跳转</Button>
      </div>

      <div className={style.text}>按下esc键以取消跳转</div>
    </div>
  )
}

NotFound.propTypes = {
  text: PropTypes.string
}

export default memo(NotFound)
