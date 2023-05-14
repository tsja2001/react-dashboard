import PropTypes from 'prop-types'
import { Button, Card } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import style from './CardWrap.module.scss'

const CardWrap = (props) => {
  const { height = '300px', children, detailHandler = () => {} } = props

  return (
    <Card
      className={style.card}
      title="图表名称显示占位"
      extra={
        <Button
          className={style.button}
          type="link"
          onClick={() => detailHandler('id=xxx')}
        >
          选择此图表
        </Button>
      }
      // actions={[
      //   <EditOutlined key="edit" onClick={() => editHandler('id=xxx')} />,
      //   <DeleteOutlined key="delete" onClick={() => deleteHandler('id=xxx')} />
      // ]}
    >
      <div style={{ width: '100%', height }}>{children}</div>
    </Card>
  )
}

CardWrap.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node,
  detailHandler: PropTypes.func,
  editHandler: PropTypes.func,
  deleteHandler: PropTypes.func
}

export default CardWrap
