import PropTypes from 'prop-types'
import { Button, Card } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import style from './CardWrap.module.scss'

const CardWrap = (props) => {
  const {
    height = '300px',
    children,
    title = '未命名图表',
    deleteHandler = () => {},
    editHandler = () => {},
    detailHandler = () => {},
    showBtn = true
  } = props

  return (
    <Card
      className={style.card}
      title={title}
      size="small"
      extra={
        showBtn && (
          <Button
            className={style.button}
            type="link"
            onClick={() => detailHandler('id=xxx')}
          >
            查看详细
          </Button>
        )
      }
      actions={
        showBtn
          ? [
              <EditOutlined
                size="mini"
                key="edit"
                onClick={() => editHandler('id=xxx')}
              />,
              <DeleteOutlined
                size="mini"
                key="delete"
                onClick={() => deleteHandler('id=xxx')}
              />
            ]
          : []
      }
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
