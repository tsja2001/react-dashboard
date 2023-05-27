import { Modal, App, Button } from 'antd'

export const ConfirmModal = () => {
  const { modal } = App.useApp()

  const handleOk = () => {
    modal.confirm({
      title: '标题',
      content: '内容',
      onOk: () => {
        console.log('ok')
      },
      onCancel: () => {
        console.log('cancel')
      }
    })
  }

  return (
    <div>
      <Button onClick={handleOk}>创建图表</Button>
    </div>
  )
}
