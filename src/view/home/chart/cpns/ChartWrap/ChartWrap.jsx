import PropTypes from 'prop-types'
import { Card } from 'antd'
import {
  DeleteOutlined,
  DownSquareOutlined,
  EditOutlined
} from '@ant-design/icons'
import style from './ChartWrap.module.scss'

const ChartWrap = (props) => {
  const { width = '100%', height = '300px', children } = props

  return (
    <Card
      className={style.card}
      title="图表名称显示占位"
      style={{ width }}
      extra={<a href="#">查看详细</a>}
      actions={[
        <EditOutlined key="edit" />,
        <DeleteOutlined key="delete" />,
        <DownSquareOutlined key="more" />
      ]}
    >
      <div style={{ width: '100%', height }}>{children}</div>
    </Card>
  )
}

ChartWrap.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node
}

export default ChartWrap
