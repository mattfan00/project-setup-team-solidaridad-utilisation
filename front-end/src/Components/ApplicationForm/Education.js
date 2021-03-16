import React, { useState, useEffect } from "react"
import moment from "moment"

import {
  Row,
  Col,
  Button,
  Card,
  Alert,
} from "antd"

import {
  PlusOutlined,
  EditTwoTone
} from "@ant-design/icons"

import "./card.css"

import NewEducationForm from "./NewEducationForm"
import UpdateEducationForm from "./UpdateEducationForm"

const Education = (props) => {
  const [education, setEducation] = useState([])
  const [showNewForm, setShowNewForm] = useState(false)
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [initialValues, setInitialValues] = useState(null)

  useEffect(() => {
    if (props.education) {
      setEducation(props.education)
    }
  }, [props.education])

  // used when you want to add a completely new education
  const newEducationForm = () => {
    setInitialValues(null)
    setShowNewForm(true)
  }

  // used when you want to bring up the form to update an entry
  const updateJobForm = (index, values) => {
    const newValues = {...values, index}

    // initialValues contains the initial values to fill the form with when the modal opens
    setInitialValues(newValues)
    setShowUpdateForm(true)
  }

  // close new education modal
  const cancelNewEducation= () => setShowNewForm(false)

  // close update job modal
  const cancelUpdateEducation = () => {
    setInitialValues(null)
    setShowUpdateForm(false)
  }

  const addEducation = (details) => {
    const newEducation = [...education, details]
    setEducation(newEducation)
    setShowNewForm(false)
    props.updateEducation(newEducation)
  }

  const updateEducation = (index, updatedEducation) => {
    setShowUpdateForm(false)
    console.log(index, updatedEducation)
    const newEducation = education.map((edu, i) => {
      if (i == index) {
        return {...updatedEducation}
      } else {
        return edu
      }
    })
    setEducation(newEducation)
    props.updateEducation(newEducation)
  }

  const formatDate = (date) => {
    return moment(date).format("MMM YYYY")
  }

  return (
    <Row gutter={[16, 16]}>
      {education.length > 0 && (
        <Col span={24}>
          <Row gutter={[16, 16]}>
            {education && education.map((edu, i) => (
              <Col span={24} key={i}>
                <Card className="info-card" size="small">
                  <div><strong>{edu.school}</strong></div>
                  <div>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</div>
                  <div>Major in {edu.major}</div>
                  <div className="edit" onClick={() => updateJobForm(i, edu)}><EditTwoTone /></div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      )}
      {education.length == 0 && (
        <Col span={24}>
          <Alert message="No education added" type="warning" showIcon />
        </Col>
      )}
      {/* {showForm && (
        <Col span={24}>
          <NewJobForm
            cancelJob={cancelJob}
            addJob={addJob}
          />
        </Col>
      )} */}
      <Col span={24}>
        <Button block type="text" onClick={newEducationForm}><PlusOutlined />Add Education</Button>
      </Col>

      <NewEducationForm
        showForm={showNewForm}
        cancelEducation={cancelNewEducation}
        addEducation={addEducation}
      />

      <UpdateEducationForm
        showForm={showUpdateForm}
        cancelEducation={cancelUpdateEducation}
        updateEducation={updateEducation}
        initialValues={initialValues}
      />
    </Row>
  )
}

export default Education

