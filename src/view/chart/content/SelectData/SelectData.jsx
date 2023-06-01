import { memo, useEffect, useRef, useState } from 'react'
import { Button, Col, Form, Row } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { SheetComponent } from '@antv/s2-react'

import style from './SelectData.module.scss'
import Select from '../cpns/select/Select'
import { useNavigateWithParams } from '@/hooks/useNavigateWithParams'
import { Card } from 'antd'
import TableShowChartData from '@/component/table/TableShowChartData'

const SelectData = (props) => {
  const { currentChartData } = props

  const navWithParams = useNavigateWithParams()
  const [priviewWrapperStyle, setStyle] = useState({})
  const priviewWrapperRef = useRef(null)

  useEffect(() => {
    setStyle({
      height: priviewWrapperRef.current?.clientHeight,
      width: priviewWrapperRef.current?.clientWidth
    })
    console.log('')
    // setHeight(priviewWrapperRef.current?.clientHeight)
    // console.log(priviewWrapperRef.current?.clientHeight)
  }, [
    priviewWrapperRef.current?.clientHeight,
    priviewWrapperRef.current?.clientWidth
  ])

  const nextStepHandler = () => {
    navWithParams('/chart/select_chart')
  }

  return (
    <div className={style.content}>
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        // wrapperCol={{ span: 16 }}
        // style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item label="数据源">
          <Select />
        </Form.Item>
        <Form.Item label="预览数据">
          {currentChartData && currentChartData.chartConfig && (
            <TableShowChartData
              chartConfig={currentChartData?.chartConfig}
              width={priviewWrapperStyle.width}
            ></TableShowChartData>
          )}
        </Form.Item>
        <Form.Item label="预览数据">
          <div ref={priviewWrapperRef}>
            <Card className={style.previewInner}>
              <pre>{JSON.stringify(currentChartData, null, 2)}</pre>
            </Card>
          </div>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button
            type="primary"
            onClick={nextStepHandler}
            size="large"
            disabled={!currentChartData}
          >
            下一步
            <CaretRightOutlined />
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentChartData: state.viewChart.currentChartData
})

export default connect(mapStateToProps)(memo(SelectData))
