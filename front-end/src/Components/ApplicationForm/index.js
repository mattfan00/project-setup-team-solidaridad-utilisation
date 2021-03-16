import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import {
  Button,
  Form,
  Row,
  Divider,
  Card,
  Space,
  Typography,
  message
} from "antd"

import Name from "./Name"
import Email from "./Email"
import Address from "./Address"
import WorkExperience from "./WorkExperience"
import Education from "./Education"
import ExtraQuestions  from "./ExtraQuestions"

import ConfirmSubmit from "./ConfirmSubmit"

const { Title } = Typography


const ApplicationForm = (props) => {
  const [detailsForm] = Form.useForm()
  const [extraForm] = Form.useForm()
  const [jobs, setJobs] = useState([])
  const [education, setEducation] = useState([])
  const [confirm, setConfirm] = useState(false)
  const [userDetails, setUserDetails] = useState(null)

  const history = useHistory()
  const { company, job } = useParams()

  // when receive the current user from props, update the state
  useEffect(() => {
    if (props.user) {
      const { details } = props.user
      setUserDetails(details)

      // auto fill in some of the fields
      detailsForm.setFieldsValue({
        name: details.name,
        email: details.email,
        address: details.address
      })
    }
  }, [props.user])

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

  const display = (fieldName) => {
    return props.fields.includes(fieldName)
  }

  return (
    <>
      <Space direction="vertical" size="large">
        <Card>
          {/* <h2>Applicant Details</h2> */}
          <Title level={4}>Applicant Details</Title>
          <Form form={detailsForm} layout="vertical">
            <Row gutter={[16]}>
                {display("name") ? <Name /> : ""}
                {display("email") ? <Email /> : ""}
                {display("address") ? <Address /> : ""}
            </Row>
          </Form>

          {display("workExperience") ?
          <>
            <Divider orientation="left">Work Experience</Divider>
            <WorkExperience
              updateJobs={updateJobs}
              jobs={userDetails ? userDetails.workExperience : []}
            />
          </>
          : ""}


          {display("education") ?
          <>
          <Divider orientation="left">Education</Divider>
          <Education
            updateEducation={updateEducation}
            education={userDetails ? userDetails.education: []}
          />
          </>
          : ""}

        </Card>

        {props.extraQuestions ?
        <Card>
          <Title level={4}>Extra Questions</Title>
          <Form form={extraForm} layout="vertical">
            <Row gutter={16}>
              <ExtraQuestions
                questions={props.extraQuestions}
              />
            </Row>
          </Form>
        </Card>
        : ""}

        <Button block shape="round" size="large" type="primary" onClick={check}>Submit</Button>
      </Space>

      <ConfirmSubmit showForm={confirm} close={closeConfirmation} />
    </>
  )
}

export default ApplicationForm