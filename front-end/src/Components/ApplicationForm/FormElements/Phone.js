import React from "react"
import {
  Col,
  Form,
  Input
} from "antd"

const Phone = () => {
  return (
    <>
      <Col span={24}>
        <Form.Item
          label="Primary Phone"
          name="phone"
          rules={[{ required: true, message: 'Please input your phone number' }]}
        >
          <Input />
        </Form.Item>
      </Col>
    </>
  )
}

export default Phone