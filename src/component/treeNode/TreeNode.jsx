import { memo } from 'react'
import { Tree, Form, Input, Switch } from 'antd'

import style from './TreeNode.module.scss'

const TreeNode = (props) => {
  const { label, children, name, valuePropName, disabled } = props

  return (
    <div className={style.flex}>
      <div className={style.left}>{label ?? 'label'}</div>
      <label className={style.right}>
        <Form.Item
          name={name}
          className={style.form_item}
          valuePropName={valuePropName}
        >
          {children}
        </Form.Item>
      </label>
    </div>
  )
}

export default memo(TreeNode)
