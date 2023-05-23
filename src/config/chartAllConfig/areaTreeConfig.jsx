import TreeNode from '@/component/treeNode/TreeNode'
import { Input, Switch, Select } from 'antd'

const areaTreeConfig = [
  {
    title: (
      <TreeNode
        label="显示标题"
        name={['title', 'visible']}
        valuePropName="checked"
      >
        <Switch />
      </TreeNode>
    ),
    key: '1',
    children: [
      {
        title: (
          <TreeNode label="标题内容" name={['title', 'text']}>
            <Input />
          </TreeNode>
        ),
        disabled: false,
        key: '1-0'
      }
    ]
  },
  {
    title: (
      <TreeNode
        label="显示副标题"
        name={['description', 'visible']}
        valuePropName="checked"
      >
        <Switch />
      </TreeNode>
    ),
    key: '2',
    children: [
      {
        title: (
          <TreeNode label="副标题内容" name={['description', 'text']}>
            <Input />
          </TreeNode>
        ),
        key: '2-0'
      }
    ]
  },
  {
    title: (
      <TreeNode
        label="显示图例"
        name={['legend', 'visible']}
        valuePropName="checked"
      >
        <Switch />
      </TreeNode>
    ),
    key: '3',
    children: [
      {
        title: (
          <TreeNode label="位置" name={['legend', 'position']}>
            <Select
              style={{ width: 120 }}
              options={[
                { value: 'right-bottom', label: '左下' },
                { value: 'right-left', label: '左中' },
                { value: 'right-top', label: '左上' },
                { value: 'left-bottom', label: '右下' },
                { value: 'left-left', label: '右中' },
                { value: 'left-top', label: '右上' },
                { value: 'top-left', label: '上左' },
                { value: 'top-center', label: '上中' },
                { value: 'top-right', label: '上右' },
                { value: 'bottom-left', label: '下左' },
                { value: 'bottom-center', label: '下中' },
                { value: 'bottom-right', label: '下右' }
              ]}
            />
          </TreeNode>
        ),
        key: '3-0'
      },
      {
        title: (
          <TreeNode
            label="翻页"
            name={['legend', 'flipPage']}
            valuePropName="checked"
          >
            <Switch />
          </TreeNode>
        ),
        key: '3-1'
      },
      {
        title: (
          <TreeNode
            label="x偏移"
            name={['legend', 'offsetX']}
            valuePropName="checked"
          >
            <Switch />
          </TreeNode>
        ),
        key: '3-2'
      },
      {
        title: (
          <TreeNode
            label="y偏移"
            name={['legend', 'offsetY']}
            valuePropName="checked"
          >
            <Switch />
          </TreeNode>
        ),
        key: '3-3'
      }
    ]
  }
]

export default areaTreeConfig
