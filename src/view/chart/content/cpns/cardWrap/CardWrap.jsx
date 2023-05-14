import { Button, Card } from 'antd'
import style from './CardWrap.module.scss'

const CardWrap = (props) => {
  const {
    height = '300px',
    children,
    detailHandler = () => {},
    title = '图表名称显示占位'
  } = props

  return (
    <Card
      className={style.card}
      title={title}
      extra={
        <Button
          className={style.button}
          type="link"
          onClick={() => detailHandler('id=xxx')}
        >
          点击选择此图表
        </Button>
      }
    >
      <div style={{ width: '100%', height }}>{children}</div>
    </Card>
  )
}

export default CardWrap
