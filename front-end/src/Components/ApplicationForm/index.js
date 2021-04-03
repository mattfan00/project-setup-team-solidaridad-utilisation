import React, { useContext, useEffect, useState } from "react"
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

import { AuthContext } from "../../Context/AuthContext"

import Resume from "./FormElements/Resume"
import Name from "./FormElements/Name"
import Email from "./FormElements/Email"
import Phone from "./FormElements/Phone"
import Address from "./FormElements/Address"
import WorkExperience from "./FormElements/WorkExperience"
import Education from "./FormElements/Education"
import Gender from "./FormElements/Gender"
import Disability from "./FormElements/Disability"
import HispanicLatino from "./FormElements/HispanicLatino"
import Veteran from "./FormElements/Veteran"
import WorkAuthorization from "./FormElements/WorkAuthorization"
import Website from "./FormElements/Website"
import Linkedin from "./FormElements/Linkedin"
import ExtraQuestions  from "./FormElements/ExtraQuestions"

import ConfirmSubmit from "./ConfirmSubmit"
import axios from "axios"

const { Title } = Typography


const ApplicationForm = (props) => {
  const [detailsForm] = Form.useForm()
  const [extraForm] = Form.useForm()
  const [jobs, setJobs] = useState([])
  const [education, setEducation] = useState([])
  const [confirm, setConfirm] = useState(false)
  const [userDetails, setUserDetails] = useState(null)

  const { user } = useContext(AuthContext)

  const history = useHistory()
  const { company, job } = useParams()

  // when receive the current user, update the state
  useEffect(() => {
    if (user) {
      const { details } = user
      setUserDetails(details)

      // auto fill in some of the fields
      detailsForm.setFieldsValue({
        name: details.name,
        email: details.email,
        address: details.address
      })
      message.success("Autofilled applicable fields")
    }
  }, [user])

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

      await axios.post("http://localhost:4000/postapplication",{
        newApplication: {
          details: result[0], 
          jobs: jobs, 
          education: education, 
          extraQuestions: result[1]
        }
      })

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
                {display("resume") ? <Resume /> : ""}
                {display("name") ? <Name /> : ""}
                {display("email") ? <Email /> : ""}
                {display("phone") ? <Phone /> : ""}
                {display("address") ? <Address /> : ""}
                {display("gender") ? <Gender /> : ""}
                {display("disability") ? <Disability /> : ""}
                {display("hispanic-latino") ? <HispanicLatino /> : ""}
                {display("veteran") ? <Veteran /> : ""}
                {display("workAuthorization") ? <WorkAuthorization /> : ""}
                {display("website") ? <Website /> : ""}
                {display("linkedin") ? <Linkedin/> : ""}
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

        {props.extraQuestions && props.extraQuestions.length > 0 ?
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

        <Button block size="large" type="primary" onClick={check}>Submit</Button>
      </Space>

      <ConfirmSubmit showForm={confirm} close={closeConfirmation} />
    </>
  )
}

export default ApplicationForm