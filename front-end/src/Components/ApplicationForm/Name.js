import React from "react"
import {
  Col,
  Form,
  Input
} from "antd"

const Name = () => {
  return (
    <>
      <Col span={12}>
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: 'Please input your first name' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: 'Please input your last name' }]}
        >
          <Input />
        </Form.Item>
      </Col>
    </>
  )
}

export default Name