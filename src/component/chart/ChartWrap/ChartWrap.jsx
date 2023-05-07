import PropTypes from 'prop-types'
import { Card } from 'antd'
import {
  DeleteOutlined,
  DownSquareOutlined,
  EditOutlined
} from '@ant-design/icons'

const ChartWrap = (Chart) => {
  const WrappedChart = (props) => {
    const { width = '100%', height = '100%' } = props

    return (
      <Card
        title="图表名称显示占位"
        // extra={<a href="#">More</a>}
        style={{ width }}
        actions={[
          <EditOutlined key="edit" />,
          <DeleteOutlined key="delete" />,
          <DownSquareOutlined key="more" />
        ]}
      >
        <div style={{ width: '100%', height: height }}>
          <Chart />
        </div>
      </Card>
    )
  }

  WrappedChart.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string
  }

  WrappedChart.displayName = `ChartWrap(${
    Chart.displayName || Chart.name || 'Chart'
  })`

  return WrappedChart
}

export default ChartWrap
