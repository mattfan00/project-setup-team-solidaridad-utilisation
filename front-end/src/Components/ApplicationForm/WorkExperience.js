import { useState } from "react"

import {
  Col,
  Form,
  Input,
  DatePicker,
  Button
} from "antd"

const WorkExperience = () => {
  const [jobs, setJobs] = useState([])
  const [showForm, setShowForm] = useState(false)
  const addNewJob = () => {
  }

  return (
    <>

      <Button type="primary" onClick={addNewJob}>Add Work Experience</Button>
    </>
  )
}

const Job = () => {
  return (
    <>
      <Col span={24}>
        <Form.Item
          label="Job Title"
          name="title"
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          label="Employer"
          name="employer"
        >
          <Input />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          label="Start Date"
          name="startDate"
        >
          <DatePicker />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          label="End Date"
          name="endDate"
        >
          <DatePicker />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item
          label="Description"
          name="description"
        >
          <Input.TextArea />
        </Form.Item>
      </Col>
    </>
  )
}

export default WorkExperience
