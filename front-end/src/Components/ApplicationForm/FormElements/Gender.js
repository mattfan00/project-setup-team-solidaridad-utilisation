import React from "react"
import {
  Col,
  Form,
  Radio
} from "antd"

const Gender = () => {
  return (
    <>
      <Col span={24}>
        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: 'Please choose one' }]}
        >
          <Radio.Group>
            <Radio value={"Male"}>Male</Radio>
            <Radio value={"Female"}>Female</Radio>
            <Radio value={"Other"}>Other</Radio>
            <Radio value={"Prefer not to say"}>Prefer not to say</Radio>
          </Radio.Group>
        </Form.Item>
      </Col>
    </>
  )
}

export default Gender