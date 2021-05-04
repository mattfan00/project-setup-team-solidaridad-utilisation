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
import moment from "moment"

const { Title } = Typography


const ApplicationForm = (props) => {
  const [detailsForm] = Form.useForm()
  const [extraForm] = Form.useForm()
  const [jobs, setJobs] = useState([])
  const [education, setEducation] = useState([])
  const [confirm, setConfirm] = useState(false)
  const [userDetails, setUserDetails] = useState(null)

  const { applicantUser } = useContext(AuthContext)

  const history = useHistory()
  const { job } = useParams()

  // when receive the current user, update the state
  useEffect(() => {
    if (applicantUser) {
      const { details } = applicantUser
      setUserDetails(details)

      // auto fill in fields
      detailsForm.setFieldsValue({...details})
      setJobs(details?.workExperience)
      setEducation(details?.education)
      message.success("Autofilled applicable fields")
    }
  }, [applicantUser])

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
    const results = await Promise.all([
      detailsForm.validateFields(),
      extraForm.validateFields()
    ])

    const { name, ...details } = results[0]
    const extraQuestions = Object.keys(results[1]).map((key) => {
      let answer = results[1][key]

      if (moment.isMoment(answer)) {
        answer = moment(answer).format("YYYY-MM-DD")
      }

      return {
        question: key,
        answer
      }
    })

    await axios.post(`/job/${job}/application/new`,{
      firstName: name.firstName,
      lastName: name.lastName,
      details: details,
      workExperience: jobs,
      education: education,
      extraQuestions: extraQuestions
    })

    history.push(`/application/${job}/success`)
  }

  const check = async () => {
    try {
      await Promise.all([
        detailsForm.validateFields(),
        extraForm.validateFields()
      ])

      setConfirm(true)
    } catch (errorInfo) {
      message.error("Please fill out all of the required fields")
    }
  }

  const display = (fieldName) => {
    return props.fields.includes(fieldName)
  }

  return (
    <div>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Card>
          {/* <h2>Applicant Details</h2> */}
          <Title level={4}>Applicant Details</Title>
          <Form form={detailsForm} layout="vertical">
            <Row gutter={[16]}>
                {/* {display("resume") ? <Resume /> : ""} */}
                <Name />
                {display("email") ? <Email /> : ""}
                {display("primaryPhone") ? <Phone /> : ""}
                {display("address") ? <Address /> : ""}
                {display("gender") ? <Gender /> : ""}
                {display("disability") ? <Disability /> : ""}
                {display("hispanicLatino") ? <HispanicLatino /> : ""}
                {display("veteran") ? <Veteran /> : ""}
                {display("workAuth") ? <WorkAuthorization /> : ""}
                {display("website") ? <Website /> : ""}
                {display("linkedin") ? <Linkedin/> : ""}
            </Row>
          </Form>

          {display("workEx") ?
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
    </div>
  )
}

export default ApplicationForm