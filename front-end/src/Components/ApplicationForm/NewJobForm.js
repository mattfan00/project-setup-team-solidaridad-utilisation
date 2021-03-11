import React, { useState } from "react"
import {
  Row,
  Col,
  Form,
  Input,
  DatePicker,
  Button,
  Space,
  Modal
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
    form.resetFields()
    setStartDate("")
    setEndDate("")
  }

  const add = async (e) => {
    e.preventDefault()

    try {
      const values = await form.validateFields()
      console.log('Success:', values)

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
    } catch (errorInfo) {
      console.log('Failed:', errorInfo)
    }


  }

  return (
    <Modal
      title="Add Work Experience"
      okText="Add"
      visible={props.showForm}
      onOk={add}
      onCancel={cancel}
    >
      <Form form={form} layout="vertical">
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Job Title"
              name="title"
              rules={[{ required: true, message: 'Please input the title' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Employer"
              name="employer"
              rules={[{ required: true, message: 'Please input the employer' }]}
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
              label="Description"
              name="description"
              rules={[{ required: true, message: 'Please input a description' }]}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>

          {/* <Col span={24}>
            <Space>
              <Button danger onClick={cancel}>Cancel</Button>
              <Button type="primary" onClick={add}>Add</Button>
            </Space>
          </Col> */}
        </Row>
      </Form>
    </Modal>
  )
}

export default NewJobForm
