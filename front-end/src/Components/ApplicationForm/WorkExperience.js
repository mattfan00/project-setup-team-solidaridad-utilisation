import { useState } from "react"

import {
  Col,
  Form,
  Input,
  DatePicker,
  Button,
  Card
} from "antd"

import NewJobForm from "./NewJobForm"

const WorkExperience = () => {
  const [jobs, setJobs] = useState([
    {
      title: "Software Engineer",
      employer: "Amazon",
      description: "i did a lot at this job"
    }
  ])
  const [showForm, setShowForm] = useState(false)

  const showJobForm = () => setShowForm(true)
  const cancelJob = () => {
    console.log("cancel the form")
    setShowForm(false)
  }

  const addJob = () => {
    console.log("add a new form")
    setShowForm(false)
  }

  return (
    <>
      {jobs && jobs.map(job => (
        <Col span={24}>
          <Card size="small">
            <h4>{job.title} - {job.employer}</h4>
            <div>{job.description}</div>
          </Card>
        </Col>
      ))}
      {showForm && (
        <NewJobForm
          cancelJob={cancelJob}
          addJob={addJob}
        />
      )}
      <Col span={24}>
        {!showForm && (
          <Button type="primary" onClick={showJobForm}>Add Work Experience</Button>
        )}
      </Col>
    </>
  )
}

export default WorkExperience
