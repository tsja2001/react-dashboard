import { memo, useContext } from 'react'
import { Form, Tree } from 'antd'

import style from './ChartConfig.module.scss'
import areaTreeConfig from '@/config/chartAllConfig/areaTreeConfig'
import { ChartContext } from '@/view/chart/ChartLayout'

const ChartConfig = () => {
  const [form] = Form.useForm()

  const { setCurrentChartConfigByForm } = useContext(ChartContext)

  const fieldChangeHandler = (changedFields, allFields) => {
    console.log('allFields', allFields)
    setCurrentChartConfigByForm(allFields)
  }

  // 如果用户

  return (
    <div className={style.content}>
      <Form form={form} onValuesChange={fieldChangeHandler}>
        <Tree
          defaultExpandAll
          autoExpandParent
          treeData={areaTreeConfig}
          blockNode
        />
      </Form>
    </div>
  )
}

export default memo(ChartConfig)
