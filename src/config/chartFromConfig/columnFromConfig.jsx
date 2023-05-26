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
    children: [
      {
        title: (
          <TreeNode label="标题内容" name={['title', 'text']}>
            <Input />
          </TreeNode>
        )
      },
      {
        title: (
          <TreeNode label="标题大小" name={['title', 'size']} initialValue={3}>
            <Select>
              <Select.Option value={1}>较大</Select.Option>
              <Select.Option value={2}>大</Select.Option>
              <Select.Option value={3}>中</Select.Option>
              <Select.Option value={4}>小</Select.Option>
              <Select.Option value={5}>较小</Select.Option>
            </Select>
          </TreeNode>
        )
      }
    ]
  },
  {
    title: (
      <TreeNode
        label="显示描述"
        name={['description', 'visible']}
        valuePropName="checked"
      >
        <Switch />
      </TreeNode>
    ),
    children: [
      {
        title: (
          <TreeNode label="描述内容" name={['description', 'text']}>
            <Input />
          </TreeNode>
        )
      },
      {
        title: (
          <TreeNode
            label="加粗"
            name={['description', 'strong']}
            valuePropName="checked"
          >
            <Switch />
          </TreeNode>
        )
      }
    ]
  },
  {
    title: (
      <TreeNode
        label="显示图例"
        name={['legend', 'visible']}
        // name={['legend']}
        valuePropName="checked"
        // initialValue={false}
      >
        <Switch />
      </TreeNode>
    ),
    children: [
      {
        title: (
          <TreeNode label="位置" name={['legend', 'position']}>
            <Select
              options={[
                { value: 'top', label: '上中' },
                { value: 'top-left', label: '上左' },
                { value: 'top-right', label: '上右' },
                { value: 'left', label: '左中' },
                { value: 'left-top', label: '左上' },
                { value: 'left-bottom', label: '左下' },
                { value: 'right', label: '右中' },
                { value: 'right-top', label: '右上' },
                { value: 'right-bottom', label: '右下' },
                { value: 'bottom', label: '下中' },
                { value: 'bottom-left', label: '下左' },
                { value: 'bottom-right', label: '下右' }
              ]}
            />
          </TreeNode>
        )
      },
      {
        title: (
          <TreeNode
            label="支持翻页"
            name={['legend', 'flipPage']}
            valuePropName="checked"
          >
            <Switch />
          </TreeNode>
        )
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
        )
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
        )
      }
    ]
  },
  {
    title: (
      <TreeNode label="平滑" name={['smooth']} valuePropName="checked">
        <Switch />
      </TreeNode>
    )
  },
  {
    title: (
      <TreeNode
        label="x轴"
        name={['xAxis', 'visible']}
        valuePropName="checked"
        initialValue={true}
      >
        <Switch />
      </TreeNode>
    ),
    children: [
      {
        title: (
          <TreeNode label="标题" name={['xAxis', 'title', 'text']}>
            <Input />
          </TreeNode>
        )
      },
      {
        title: (
          <TreeNode
            label="文本标签"
            // name={['xAxis', 'label', 'visible']}
            // valuePropName="checked"
          >
            {/* <Switch /> */}
          </TreeNode>
        ),
        children: [
          {
            title: (
              <TreeNode
                label="过密时旋转"
                name={['xAxis', 'label', 'autoRotate']}
                valuePropName="checked"
              >
                <Switch />
              </TreeNode>
            )
          },
          {
            title: (
              <TreeNode
                label="过密时隐藏"
                name={['xAxis', 'label', 'autoHide']}
                valuePropName="checked"
              >
                <Switch />
              </TreeNode>
            )
          }
        ]
      }
    ]
  }
]

export default areaTreeConfig
