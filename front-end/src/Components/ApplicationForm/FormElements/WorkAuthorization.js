import React from "react"
import {
  Col,
  Form,
  Radio
} from "antd"

const WorkAuthorization = () => {
  return (
    <>
      <Col span={24}>
        <Form.Item
          label="Are you eligible to work in the country this job is located?"
          name="workAuthorization"
          rules={[{ required: true, message: 'Please choose one' }]}
        >
          <Radio.Group>
            <Radio value={"Yes"}>Yes</Radio>
            <Radio value={"No"}>No</Radio>
          </Radio.Group>
        </Form.Item>
      </Col>
    </>
  )
}

export default WorkAuthorization