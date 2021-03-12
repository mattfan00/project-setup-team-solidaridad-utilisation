import React, { useState } from "react"
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

import NewJobForm from "./NewJobForm"
import UpdateJobForm from "./UpdateJobForm"

const WorkExperience = (props) => {
  const [jobs, setJobs] = useState([])
  const [showNewForm, setShowNewForm] = useState(false)
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [initialValues, setInitialValues] = useState(null)

  // used when you want to add a completely new job
  const newJobForm = () => {
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

  // close new job modal
  const cancelNewJob = () => setShowNewForm(false)

  // close update job modal
  const cancelUpdateJob = () => {
    setInitialValues(null)
    setShowUpdateForm(false)
  }

  const addJob = (details) => {
    const newJobs = [...jobs, details]
    setJobs(newJobs)
    setShowNewForm(false)
    props.updateJobs(newJobs)
  }

  const updateJob = (index, updatedJob) => {
    setShowUpdateForm(false)
    console.log(index, updatedJob)
    const newJobs = jobs.map((job, i) => {
      if (i == index) {
        return {...updatedJob}
      } else {
        return job
      }
    })
    setJobs(newJobs)
    props.updateJobs(newJobs)
  }

  const formatDate = (date) => {
    return moment(date).format("MMM YYYY")
  }

  return (
    <Row gutter={[16, 16]}>
      {jobs.length > 0 && (
        <Col span={24}>
          <Row gutter={[16, 16]}>
            {jobs && jobs.map((job, i) => (
              <Col span={24}>
                <Card className="info-card" size="small">
                  <div><strong>{job.title} - {job.employer}</strong></div>
                  <div>{formatDate(job.startDate)} - {job.currentJob ? "Present" : formatDate(job.endDate)}</div>
                  <div>{job.description}</div>
                  <div className="edit" onClick={() => updateJobForm(i, job)}><EditTwoTone /></div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      )}
      {jobs.length == 0 && (
        <Col span={24}>
          <Alert message="No work experiences added" type="warning" showIcon />
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
        <Button block type="text" onClick={newJobForm}><PlusOutlined />Add Work</Button>
      </Col>

      <NewJobForm
        showForm={showNewForm}
        cancelJob={cancelNewJob}
        addJob={addJob}
        // updateJob={updateJob}
        // initialValues={initialValues}
      />

      <UpdateJobForm
        showForm={showUpdateForm}
        cancelJob={cancelUpdateJob}
        updateJob={updateJob}
        initialValues={initialValues}
      />
    </Row>
  )
}

export default WorkExperience
