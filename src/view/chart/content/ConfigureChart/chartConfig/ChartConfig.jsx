import { memo, useContext, useEffect } from 'react'
import { Form, Tree } from 'antd'

import style from './ChartConfig.module.scss'
import chartFromConfig from '@/config/chartFromConfig'
import { ChartContext } from '@/view/chart/ChartLayout'

const ChartConfig = () => {
  const [form] = Form.useForm()

  const { setCurrentChartConfigByForm, currentChartConfigByPreset } =
    useContext(ChartContext)

  const fieldChangeHandler = (changedFields, allFields) => {
    console.log('allFields', allFields)
    setCurrentChartConfigByForm(allFields)
  }

  useEffect(() => {
    form.setFieldsValue(currentChartConfigByPreset.presetConf)
    console.log(
      'currentChartConfigByPreset.presetConf',
      currentChartConfigByPreset.presetConf
    )
  }, [currentChartConfigByPreset])

  return (
    <div className={style.content}>
      <Form form={form} onValuesChange={fieldChangeHandler}>
        <Tree
          defaultExpandAll
          autoExpandParent
          treeData={chartFromConfig.areaFromConfig}
          blockNode
        />
      </Form>
    </div>
  )
}

export default memo(ChartConfig)
