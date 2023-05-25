import { memo, useContext, useEffect } from 'react'
import { Form, Tree } from 'antd'
import lodash from 'lodash'

import style from './ChartConfig.module.scss'
import { ChartContext } from '@/view/chart/ChartLayout'

const ChartConfig = () => {
  const [form] = Form.useForm()

  const {
    setCurrentChartConfigByForm,
    currentChartConfigByForm,
    currentChartConfigByPreset,
    allChartFromConfig
  } = useContext(ChartContext)

  // 组件加载时, 将第二步选择的预设数据, 设置到表单中. 并且将表单数据设置到context中
  useEffect(() => {
    console.log('currentChartConfigByPreset', currentChartConfigByPreset)
    form.setFieldsValue(lodash.cloneDeep(currentChartConfigByPreset.presetConf))
    setCurrentChartConfigByForm({
      ...getValuesExcludeUndefined(form.getFieldsValue()),
      chartType: 'Line'
    })

    return () => {
      // 组件销毁时, 清空数据
      setCurrentChartConfigByForm({})
      form.resetFields()
    }
  }, [currentChartConfigByPreset])

  // 表单数据变化时, 将表单数据设置到context中
  const fieldChangeHandler = (changedFields, allFields) => {
    console.log('allFields', allFields)
    setCurrentChartConfigByForm({
      ...getValuesExcludeUndefined(allFields),
      chartType: 'Line'
    })
  }

  // 获取表单数据, 如果字段为underfund, 则删除字段
  const getValuesExcludeUndefined = (fieldsValue) => {
    const deepCloneFieldsValue = lodash.cloneDeep(fieldsValue)

    const map = (fieldsValue) => {
      Object.keys(fieldsValue).forEach((key) => {
        if (fieldsValue[key] === undefined || fieldsValue[key] === null) {
          delete fieldsValue[key]
        } else if (typeof fieldsValue[key] === 'object') {
          if (Object.keys(fieldsValue[key]).length === 0) {
            delete fieldsValue[key]
          } else {
            map(fieldsValue[key])
          }
        }
      })
    }

    map(deepCloneFieldsValue)

    return deepCloneFieldsValue
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
    </div>
  )
}

export default memo(ChartConfig)
