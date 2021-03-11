import React, { useState } from "react"
import {
  Row,
  Col,
  Form,
  Input,
  DatePicker,
  Modal,
  Checkbox
} from "antd"
import moment from "moment"

const NewEducationForm = (props) => {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [currentJob, setCurrentJob] = useState(false)
  const [form] = Form.useForm()

  const handleStartDate = (date, dateString) => setStartDate(dateString)
  const handleEndDate = (date, dateString) => setEndDate(dateString)

  const cancel = async (e) => {
    e.stopPropagation()
    props.cancelEducation()
    form.resetFields()
    setStartDate("")
    setEndDate("")
  }

  const add = async (e) => {
    e.preventDefault()

    try {
      const values = await form.validateFields()
      console.log('Success:', values)

      props.addEducation({
        school: form.getFieldValue("school"),
        level: form.getFieldValue("level"),
        startDate,
        endDate,
        major: form.getFieldValue("major")
      })

      form.resetFields()
      setStartDate("")
      setEndDate("")
    } catch (errorInfo) {
      console.log('Failed:', errorInfo)
    }
  }

  return (
    <Modal
      title="Add Education"
      okText="Add"
      visible={props.showForm}
      onOk={add}
      onCancel={cancel}
    >
      <Form form={form} layout="vertical">
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="School name"
              name="school"
              rules={[{ required: true, message: 'Please input a school title' }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Education Level"
              name="level"
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Start Date"
              name="startDate"
              rules={[{ required: true, message: 'Please input a date' }]}
            >
              <DatePicker picker="month" format="MMM YYYY" onChange={handleStartDate} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="End Date"
              name="endDate"
              rules={[{ required: true, message: 'Please input a date' }]}
            >
              <DatePicker picker="month" format="MMM YYYY" onChange={handleEndDate} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Major"
              name="major"
            >
              <Input />
            </Form.Item>
          </Col>

        </Row>
      </Form>
    </Modal>
  )
}

export default NewEducationForm
