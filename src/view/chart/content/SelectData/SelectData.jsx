import { connect } from 'react-redux'
import { memo } from 'react'
import { Form } from 'antd'
import style from './SelectData.module.scss'
import { Select } from 'antd'
import { fetchChartDataById } from '@/store/features/view/chart/selectData'

const SelectData = (props) => {
  const { selectedDataOptions, fetchChartData, currentChartData } = props

  const onChange = async (value) => {
    // 根据选择的option, 去获取对应table完整数据
    fetchChartData(value)
  }

  const onSearch = (value) => {
    console.log('search:', value)
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
        <Form.Item label="数据源" name="username">
          <Select
            showSearch
            placeholder="请选择一个数据源"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={selectedDataOptions}
          />
        </Form.Item>
        <Form.Item label="预览数据" name="username">
          <div className={style.preview}>
            {JSON.stringify(currentChartData, null, 2)}
          </div>
        </Form.Item>
      </Form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  selectedDataOptions: state.viewChartSelectData.selectedDataOptions,
  currentChartData: state.viewChartSelectData.currentChartData
})
const mapDispatchToProps = (dispatch) => ({
  fetchChartData: (value) => dispatch(fetchChartDataById(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(SelectData))
