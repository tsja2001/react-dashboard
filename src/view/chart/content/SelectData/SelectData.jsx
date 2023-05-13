import { connect } from 'react-redux'
import { memo } from 'react'
import { Button, Form } from 'antd'
import style from './SelectData.module.scss'
import { Select } from 'antd'
import {
  fetchChartDataById,
  setCurrentSelectedId
} from '@/store/features/view/chart/selectData'
import { CaretRightOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const SelectData = (props) => {
  const {
    selectedDataOptions,
    fetchChartData,
    currentChartData,
    currentSelectedId,
    setCurrentSelectedId
  } = props

  const nav = useNavigate()

  const onChange = async (value) => {
    // 根据选择的option, 去获取对应table完整数据
    fetchChartData(value)
    setCurrentSelectedId(value)
  }

  const onSearch = (value) => {
    console.log('search:', value)
  }

  const nextStepHandler = () => {
    nav('/chart/select_chart')
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
          <Select
            showSearch
            placeholder="请选择一个数据源"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            value={currentSelectedId}
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
  currentSelectedId: state.viewChartSelectData.currentSelectedId
})
const mapDispatchToProps = (dispatch) => ({
  fetchChartData: (value) => dispatch(fetchChartDataById(value)),
  setCurrentSelectedId: (value) => dispatch(setCurrentSelectedId(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(SelectData))
