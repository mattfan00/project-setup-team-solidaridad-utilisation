import React, { useState } from "react"
import {
  Row,
  Col,
  Form,
  Input,
  DatePicker,
  Button,
  Space
} from "antd"
// import moment from "moment"

const NewJobForm = (props) => {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [form] = Form.useForm()

  const handleStartDate = (date, dateString) => setStartDate(dateString)
  const handleEndDate = (date, dateString) => setEndDate(dateString)

  const cancel = async (e) => {
    e.stopPropagation()
    props.cancelJob()
    console.log(await form.validateFields())

    form.resetFields()
    setStartDate("")
    setEndDate("")
  }

  const add = (e) => {
    e.preventDefault()
    props.addJob({
      title: form.getFieldValue("title"),
      employer: form.getFieldValue("employer"),
      startDate,
      endDate,
      description: form.getFieldValue("description")
    })

    form.resetFields()
    setStartDate("")
    setEndDate("")
  }

  return (
    <Form form={form} layout="vertical">
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            label="Job Title"
            name="title"
            // rules={[{ required: true, message: 'Please input the title' }]}
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
            <DatePicker picker="month" format="MMM YYYY" onChange={handleStartDate} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="End Date"
            name="endDate"
          >
            <DatePicker picker="month" format="MMM YYYY" onChange={handleEndDate} />
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

        <Col span={24}>
          <Space>
            <Button danger onClick={cancel}>Cancel</Button>
            <Button type="primary" onClick={add}>Add</Button>
          </Space>
        </Col>
      </Row>
    </Form>
  )
}

export default NewJobForm
