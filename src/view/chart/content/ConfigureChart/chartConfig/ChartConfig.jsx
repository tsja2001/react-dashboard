import { memo, useContext, useEffect } from 'react'
import { App, Form, Tree, Button, message } from 'antd'
import lodash from 'lodash'
import { DoubleRightOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import style from './ChartConfig.module.scss'
import { ChartContext } from '@/view/chart/ChartLayout'
import { mergeObjects } from '@/utils/mergeObjects'
import { cleanseObject } from '@/utils/cleanseObject'
import { connect } from 'react-redux'

const ChartConfig = (props) => {
  const [form] = Form.useForm()
  const nav = useNavigate()
  const { message } = App.useApp()

  const {
    setCurrentChartConfigByForm,
    currentChartConfigByForm,
    currentChartConfigByPreset,
    allChartFromConfig
  } = useContext(ChartContext)

  // 组件加载时, 将第二步选择的预设数据, 设置到表单中. 并且将表单数据设置到context中
  useEffect(() => {
    if (currentChartConfigByPreset.cpnName === undefined) {
      message.warning('请先选择图表类型')
      nav('/chart/select_chart')
      return
    }

    form.setFieldsValue(lodash.cloneDeep(currentChartConfigByPreset.presetConf))

    setCurrentChartConfigByForm(
      mergeObjects(
        cleanseObject(form.getFieldsValue()),
        currentChartConfigByPreset.presetConf
      )
    )

    return () => {
      // 组件销毁时, 清空数据
      setCurrentChartConfigByForm({})
      form.resetFields()
    }
  }, [currentChartConfigByPreset])

  // 表单数据变化时, 将表单数据设置到context中
  const fieldChangeHandler = () => {
    // console.log('allFields', allFields)
    setCurrentChartConfigByForm(
      mergeObjects(
        cleanseObject(form.getFieldsValue()),
        currentChartConfigByPreset.presetConf
      )
    )
  }

  // 点击生成图表
  const createBtnHandler = async () => {
    const resData = {
      ...currentChartConfigByForm,
      dataId: props.currentChartId
    }
    console.log(resData)

    // 执行创建图表的接口, 并且跳转到图表列表页
    setTimeout(() => {
      message.success('图表创建成功')
      nav('/home/chart')
    }, 100)
  }

  // 用于开发, 后续删除
  useEffect(() => {
    console.log(
      'currentChartConfigByForm变化:',
      currentChartConfigByForm,
      'currentChartConfigByPreset',
      currentChartConfigByPreset
    )
  }, [currentChartConfigByForm])

  return (
    <div className={style.content}>
      <Form form={form} onValuesChange={fieldChangeHandler}>
        <Tree
          defaultExpandAll
          autoExpandParent
          treeData={allChartFromConfig[currentChartConfigByPreset.cpnName]}
          blockNode
        />
      </Form>
      <Button
        type="primary"
        size="large"
        className={style.createButton}
        onClick={createBtnHandler}
      >
        创建图表
        <DoubleRightOutlined />
      </Button>
    </div>
  )
}

const mapStateToProp = (state) => ({
  currentChartId: state.viewChartSelectData.currentChartId
})

export default connect(mapStateToProp)(memo(ChartConfig))
