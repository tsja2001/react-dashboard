import { memo } from 'react'
import { Form } from 'antd'

import style from './TreeNode.module.scss'

const TreeNode = (props) => {
  const { label, children, name, valuePropName, initialValue } = props

  return (
    <div className={style.flex}>
      <div className={style.left}>{label ?? 'label'}</div>
      <label className={style.right}>
        <Form.Item
          name={name}
          className={style.form_item}
          valuePropName={valuePropName}
          initialValue={initialValue}
        >
          {children}
        </Form.Item>
      </label>
    </div>
  )
}

export default memo(TreeNode)
