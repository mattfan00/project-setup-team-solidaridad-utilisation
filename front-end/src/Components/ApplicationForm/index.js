import React, { useState } from "react"
import {
  Button,
  Form,
  Input,
  Row,
  Col,
  Divider,
  Card,
  Space
} from "antd"

import Name from "./Name"
import Email from "./Email"
import Address from "./Address"
import WorkExperience from "./WorkExperience"



const ApplicationForm = () => {
  const [detailsForm] = Form.useForm()
  const [extraForm] = Form.useForm()
  const [jobs, setJobs] = useState([])

  const addJob = (details) => {
    console.log("added new job")
    setJobs([...jobs, details])
  }

  const check = async () => {
    try {
      const results = await Promise.all([
        detailsForm.validateFields(),
        extraForm.validateFields()
      ])
      console.log("Applicant Details: ", results[0])
      console.log("Jobs: ", jobs)
      console.log("Extra Questions: ", results[1])
    } catch (errorInfo) {
      console.log('Failed:', errorInfo)
    }
  }

  return (
    <>
      <Space direction="vertical" size="large">
        <Card>
          <h2>Applicant Details</h2>
          <Form form={detailsForm} layout="vertical">
            <Row gutter={[16]}>
                <Name />
                <Email />
                <Address />
            </Row>
          </Form>

          <Divider>Work Experience</Divider>
          <WorkExperience addJob={addJob} />
        </Card>
        <Card>
          <h2>Extra Questions</h2>
          <Form form={extraForm} layout="vertical">
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  label="Why do you want to join?"
                  name="why"
                  rules={[{ required: true, message: 'Please fill out' }]}
                >
                  <Input.TextArea />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <Button block shape="round" size="large" type="primary" onClick={check}>Preview</Button>
      </Space>
    </>
  )
}

export default ApplicationForm