import React, { useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import {
  Button,
  Form,
  Input,
  Row,
  Col,
  Divider,
  Card,
  Space,
  message
} from "antd"

import Name from "./Name"
import Email from "./Email"
import Address from "./Address"
import WorkExperience from "./WorkExperience"
import Education from "./Education"

import ConfirmSubmit from "./ConfirmSubmit"


const ApplicationForm = () => {
  const [detailsForm] = Form.useForm()
  const [extraForm] = Form.useForm()
  const [jobs, setJobs] = useState([])
  const [education, setEducation] = useState([])
  const [confirm, setConfirm] = useState(false)

  const history = useHistory()
  const { company, job } = useParams()

  const updateJobs = (newJobs) => {
    setJobs(newJobs)
  }

  const updateEducation = (newEducation) => {
    setEducation(newEducation)
  }

  const closeConfirmation = (submit) => {
    if (submit) {
      submitApplication()
    }

    setConfirm(false)
  }

  const submitApplication = async () => {
    // Add backend logic for submitting applications

    history.push(`/application/${company}/${job}/success`)
  }

  const check = async () => {
    try {
      const results = await Promise.all([
        detailsForm.validateFields(),
        extraForm.validateFields()
      ])
      console.log("Applicant Details: ", results[0])
      console.log("Jobs: ", jobs)
      console.log("Education: ", education)
      console.log("Extra Questions: ", results[1])

      setConfirm(true)
    } catch (errorInfo) {
      console.log('Failed:', errorInfo)
      message.error("Please fill out all of the required fields")
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

          <Divider orientation="left">Work Experience</Divider>
          <WorkExperience updateJobs={updateJobs} />

          <Divider orientation="left">Education</Divider>
          <Education updateEducation={updateEducation} />
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

        <Button block shape="round" size="large" type="primary" onClick={check}>Submit</Button>
      </Space>

      <ConfirmSubmit showForm={confirm} close={closeConfirmation} />
    </>
  )
}

export default ApplicationForm