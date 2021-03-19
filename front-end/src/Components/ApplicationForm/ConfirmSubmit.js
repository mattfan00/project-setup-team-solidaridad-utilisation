import React from "react"

import {
  Modal
} from "antd"

const ConfirmSubmit = (props) => {
  const cancel = () => {
    props.close(false)
  }

  const submit = () => {
    props.close(true)
  }

  return (
    <Modal
      title="Confirmation"
      visible={props.showForm}
      okText="Yes"
      onOk={submit}
      onCancel={cancel}
      closable={false}
    >
      Are you sure you want to submit your application?
    </Modal>
  )
}

export default ConfirmSubmit