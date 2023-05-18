import { Steps } from 'antd'
import { memo, useEffect } from 'react'
import style from './Header.module.scss'
import { connect } from 'react-redux'
import {
  setStepsComponentConfig,
  setStepsCurrent
} from '@/store/features/view/chart'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Header = (props) => {
  const { steps, setStepsCurrent } = props
  const nav = useNavigate()

  const onChange = (value) => {
    setStepsCurrent(value)
    const router = steps.componentConfig[value].router
    nav(`/chart/${router}`)
  }

  // 获取当前路由
  const location = useLocation()
  // 路由切换时, 设置当前选中的menu
  useEffect(() => {
    console.log('监听到路由跳转location', location)
    setStepsCurrent(
      steps.componentConfig.findIndex(
        (item) => item.router === location.pathname.split('/')[2]
      )
    )
  }, [location])

  return (
    <div className={style.content}>
      <Steps
        type="navigation"
        current={steps.current}
        onChange={onChange}
        className={style.steps}
        items={steps.componentConfig}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  steps: state.viewChart.steps
})

const mapDispatchToProps = (dispatch) => ({
  setStepsCurrent: (current) => dispatch(setStepsCurrent(current)),
  setStepsComponentConfig: (componentConfig) =>
    dispatch(setStepsComponentConfig(componentConfig))
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Header))
