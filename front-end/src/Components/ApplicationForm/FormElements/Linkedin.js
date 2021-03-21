import React from "react"
import {
  Col,
  Form,
  Input
} from "antd"

const Linkedin = () => {
  return (
    <>
      <Col span={24}>
        <Form.Item
          label="LinkedIn URL"
          name="linkedin"
          // rules={[{ required: true, message: 'Please input your email' }]}
        >
          <Input />
        </Form.Item>
      </Col>
    </>
  )
}

export default Linkedin