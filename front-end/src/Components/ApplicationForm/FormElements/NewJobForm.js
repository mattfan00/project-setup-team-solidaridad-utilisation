import React, { useState, useEffect } from "react"
import {
  Row,
  Col,
  Form,
  Input,
  DatePicker,
  Modal,
  Checkbox
} from "antd"

const NewJobForm = (props) => {
  const [currentJob, setCurrentJob] = useState(false)
  const [form] = Form.useForm()

  const toggleCurrentJob = () => {
    form.setFieldsValue({"endDate": undefined})
    setCurrentJob(!currentJob)
  }

  useEffect(() => {
    if (props.showForm) {
      form.resetFields()
    }
  }, [props.showForm])

  const cancel = (e) => {
    e.preventDefault()
    props.cancelJob()
    setCurrentJob(false)
  }

  const add = async (e) => {
    e.preventDefault()

    try {
      const values = await form.validateFields()

      props.addJob(values)
      setCurrentJob(false)
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
      closable={false}
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

          <Col span={24}>
            <Form.Item name="currentJob" valuePropName="checked">
              <Checkbox onChange={toggleCurrentJob}>This is my current job</Checkbox>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Start Date"
              name="startDate"
              rules={[{ required: true, message: 'Please input a date' }]}
            >
              <DatePicker picker="month" format="MMM YYYY" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="End Date"
              name="endDate"
              // rules={[{ required: !currentJob, message: 'Please input a date' }]}
            >
              <DatePicker disabled={currentJob} picker="month" format="MMM YYYY" />
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

        </Row>
      </Form>
    </Modal>
  )
}

export default NewJobForm
