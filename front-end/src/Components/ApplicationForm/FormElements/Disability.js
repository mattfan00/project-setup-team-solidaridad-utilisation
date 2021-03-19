import React from "react"
import {
  Col,
  Form,
  Radio
} from "antd"

const Disability = () => {
  return (
    <>
      <Col span={24}>
        <Form.Item
          label="Do you have, or previously had, a disability?"
          name="disability"
          rules={[{ required: true, message: 'Please choose one' }]}
        >
          <Radio.Group>
            <Radio value={"Yes"}>Yes</Radio>
            <Radio value={"No"}>No</Radio>
            <Radio value={"Prefer not to say"}>Prefer not to say</Radio>
          </Radio.Group>
        </Form.Item>
      </Col>
    </>
  )
}

export default Disability