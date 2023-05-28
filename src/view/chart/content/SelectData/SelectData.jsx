import { memo } from 'react'
import { Button, Form } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'

import style from './SelectData.module.scss'
import Select from '../cpns/select/Select'
import { useNavigateWithParams } from '@/hooks/useNavigateWithParams'

const SelectData = (props) => {
  const { currentChartData } = props

  const navWithParams = useNavigateWithParams()

  const nextStepHandler = () => {
    navWithParams('/chart/select_chart')
  }

  return (
    <div className={style.content}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item label="数据源">
          <Select />
        </Form.Item>
        <Form.Item label="预览数据">
          <div className={style.preview}>
            <pre>{JSON.stringify(currentChartData, null, 2)}</pre>
          </div>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
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
