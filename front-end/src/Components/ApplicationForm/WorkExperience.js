import React, { useState } from "react"

import {
  Row,
  Col,
  Button,
  Card,
  Alert
} from "antd"

import {
  PlusOutlined
} from "@ant-design/icons"

import NewJobForm from "./NewJobForm"

const WorkExperience = () => {
  const [jobs, setJobs] = useState([])
  const [showForm, setShowForm] = useState(false)

  const showJobForm = () => setShowForm(true)

  const cancelJob = () => {
    console.log("cancel the form")
    setShowForm(false)
  }

  const addJob = (details) => {
    console.log("add a new form")
    setJobs([...jobs, details])
    setShowForm(false)
  }

  return (
    <Row gutter={[16, 16]}>
      {jobs.length > 0 && (
        <Col span={24}>
          <Row gutter={[16, 16]}>
            {jobs && jobs.map(job => (
              <Col span={24}>
                <Card size="small">
                  <div><strong>{job.title} - {job.employer}</strong></div>
                  <div>{job.startDate} - {job.endDate}</div>
                  <div>{job.description}</div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      )}
      {jobs.length == 0 && !showForm && (
        <Col span={24}>
          <Alert message="No work experiences added" type="warning" showIcon />
        </Col>
      )}
      {showForm && (
        <Col span={24}>
          <NewJobForm
            cancelJob={cancelJob}
            addJob={addJob}
          />
        </Col>
      )}
      <Col span={24}>
        {!showForm && (
          <Button type="primary" onClick={showJobForm}><PlusOutlined />Add Work</Button>
        )}
      </Col>
    </Row>
  )
}

export default WorkExperience
