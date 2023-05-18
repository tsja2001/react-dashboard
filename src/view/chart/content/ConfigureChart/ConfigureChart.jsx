import { memo } from 'react'
import style from './ConfigureChart.module.scss'
import { Col, Row } from 'antd'
import { Card } from 'antd'
import ChartPreview from './chartPreview/chartPreview'
import ChartConfig from './chartConfig/chartConfig'
import ChartData from './chartData/ChartData'

const ConfigureChart = () => {
  const tabConfig = [
    {
      key: 'article',
      tab: '基础配置'
    },
    {
      key: 'app',
      tab: '全部配置'
    }
  ]

  return (
    <div className={style.content}>
      <Row className={style.row} gutter={6}>
        <Col className={style.col} xs={24} sm={24} md={16} lg={17} xl={18}>
          <Card className={style.card} title="图表预览">
            <ChartPreview />
          </Card>
        </Col>
        <Col className={style.col} xs={24} sm={24} md={8} lg={7} xl={6}>
          <Card className={style.card} tabList={tabConfig}>
            <ChartConfig />
          </Card>
        </Col>
      </Row>
      <Row className={[style.row, style.row1]} gutter={4}>
        <Col className={style.col} span={24}>
          <Card className={style.card} title="图表数据">
            <ChartData />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default memo(ConfigureChart)
