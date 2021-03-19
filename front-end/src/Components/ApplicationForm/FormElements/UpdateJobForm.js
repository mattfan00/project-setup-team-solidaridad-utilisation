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

const UpdateJobForm = (props) => {
  const [currentJob, setCurrentJob] = useState(false)
  const [form] = Form.useForm()

  const toggleCurrentJob = () => {
    form.setFieldsValue({"endDate": undefined})
    setCurrentJob(!currentJob)
  }

  useEffect(() => {
    if (props.initialValues) {
      setCurrentJob(props.initialValues.currentJob)
    }
  }, [props.initialValues])

  useEffect(() => {
    if (props.showForm) {
      form.resetFields()
    }
  }, [props.showForm])

  const cancel = (e) => {
    e.preventDefault()
    props.cancelJob()
  }

  const update = async (e) => {
    e.preventDefault()

    try {
      const values = await form.validateFields()
      console.log('Success:', values)

      props.updateJob(props.initialValues.index, values)
    } catch (errorInfo) {
      console.log('Failed:', errorInfo)
    }
  }


  return (
    <Modal
      title="Update Work Experience"
      okText="Update"
      visible={props.showForm}
      onOk={update}
      onCancel={cancel}
      closable={false}
    >
      <Form form={form} layout="vertical" initialValues={props.initialValues}>
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
              {/* <Checkbox checked={currentJob} onChange={toggleCurrentJob}>This is my current job</Checkbox> */}
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

export default UpdateJobForm
