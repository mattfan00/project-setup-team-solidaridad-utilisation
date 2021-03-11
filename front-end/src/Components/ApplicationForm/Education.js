import React, { useState } from "react"

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

const Education = (props) => {
  const [education, setEducation] = useState([])
  const [showForm, setShowForm] = useState(false)

  const showEducationForm = () => setShowForm(true)

  const cancelEducation = () => {
    setShowForm(false)
  }

  const addEducation = (details) => {
    setEducation([...education, details])
    setShowForm(false)
    // props.addJob(details)
  }

  return (
    <Row gutter={[16, 16]}>
      {education.length > 0 && (
        <Col span={24}>
          <Row gutter={[16, 16]}>
            {education && education.map(edu => (
              <Col span={24}>
                <Card className="info-card" size="small">
                  <div><strong>{edu.school}</strong></div>
                  <div>{edu.startDate} - {edu.endDate}</div>
                  <div>Major in {edu.major}</div>
                  <div class="edit"><EditTwoTone /></div>
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
        <Button block type="text" onClick={showEducationForm}><PlusOutlined />Add Education</Button>
      </Col>

      <NewEducationForm
        showForm={showForm}
        cancelEducation={cancelEducation}
        addEducation={addEducation}
      />
    </Row>
  )
}

export default Education

