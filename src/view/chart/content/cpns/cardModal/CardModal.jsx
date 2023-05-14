import PropTypes from 'prop-types'
import style from './CardModal.module.scss'
import { Modal } from 'antd'

const CardModal = (props) => {
  const {
    ifShowModal,
    setIfShowModal,
    width = '80%',
    height = '70vh',
    children
  } = props

  const handleOk = () => {
    setIfShowModal(false)
  }

  const handleCancel = () => {
    setIfShowModal(false)
  }

  return (
    <Modal
      title="图表名称显示占位"
      open={ifShowModal}
      onOk={handleOk}
      onCancel={handleCancel}
      width={width}
      className={style.modal}
    >
      <div style={{ width: '100%', height }}>{children}</div>
    </Modal>
  )
}

CardModal.propTypes = {
  ifShowModal: PropTypes.bool,
  setIfShowModal: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node
}

export default CardModal
