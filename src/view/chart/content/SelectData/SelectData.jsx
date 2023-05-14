import { connect } from 'react-redux'
import { memo, useEffect } from 'react'
import { Button, Form } from 'antd'
import style from './SelectData.module.scss'
import { Select } from 'antd'
import {
  fetchChartDataById,
  setcurrentChartId
} from '@/store/features/view/chart/selectData'
import { CaretRightOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const SelectData = (props) => {
  const {
    selectedDataOptions,
    fetchChartData,
    currentChartData,
    currentChartId,
    setcurrentChartId
  } = props

  const nav = useNavigate()

  const onChange = async (value) => {
    // 根据选择的option, 去获取对应table完整数据
    fetchChartData(value)
    setcurrentChartId(value)
  }

  const onSearch = (value) => {
    console.log('search:', value)
  }

  const nextStepHandler = () => {
    nav('/chart/select_chart')
  }

  // 设置Select默认选中第一个数据源
  useEffect(() => {
    if (selectedDataOptions.length > 0) {
      onChange(selectedDataOptions[0].value)
    }
  }, [selectedDataOptions])

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
          <Select
            showSearch
            placeholder="请选择一个数据源"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            value={currentChartId}
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={selectedDataOptions}
          />
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
  selectedDataOptions: state.viewChartSelectData.selectedDataOptions,
  currentChartData: state.viewChartSelectData.currentChartData,
  currentChartId: state.viewChartSelectData.currentChartId
})
const mapDispatchToProps = (dispatch) => ({
  fetchChartData: (value) => dispatch(fetchChartDataById(value)),
  setcurrentChartId: (value) => dispatch(setcurrentChartId(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(SelectData))
