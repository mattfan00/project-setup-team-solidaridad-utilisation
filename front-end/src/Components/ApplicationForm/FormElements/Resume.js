import React from "react"

import {
  Col,
  Form,
  Upload,
  Button
} from "antd"

import { UploadOutlined } from '@ant-design/icons'

const Resume = () => {
  return (
    <>
      <Col span={24}>
        <Form.Item
          label="Resume"
          name="resume"
          rules={[{ required: true, message: 'Please upload your resume' }]}
        >
          <Upload
            name="resume"
            maxCount={1}
            action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
          >
            <Button icon={<UploadOutlined />}>Upload Resume</Button>
          </Upload>
        </Form.Item>
      </Col>
    </>
  )
}

export default Resume
