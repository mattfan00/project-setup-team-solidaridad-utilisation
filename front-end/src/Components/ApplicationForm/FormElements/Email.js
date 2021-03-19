import React from "react"
import {
  Col,
  Form,
  Input
} from "antd"

const Email = () => {
  return (
    <>
      <Col span={24}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email' }]}
        >
          <Input />
        </Form.Item>
      </Col>
    </>
  )
}

export default Email