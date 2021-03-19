import React from "react"
import {
  Col,
  Form,
  Input
} from "antd"

const Website = () => {
  return (
    <>
      <Col span={24}>
        <Form.Item
          label="Personal Website"
          name="website"
          // rules={[{ required: true, message: 'Please input your email' }]}
        >
          <Input />
        </Form.Item>
      </Col>
    </>
  )
}

export default Website