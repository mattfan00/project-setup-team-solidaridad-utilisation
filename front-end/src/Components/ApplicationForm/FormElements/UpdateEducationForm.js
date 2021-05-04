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

const UpdateEducationForm = (props) => {
  const [form] = Form.useForm()

  useEffect(() => {
    if (props.showForm) {
      form.resetFields()
    }
  }, [props.showForm])

  const cancel = (e) => {
    e.preventDefault()
    props.cancelEducation()
  }

  const update = async (e) => {
    e.preventDefault()

    try {
      const values = await form.validateFields()

      props.updateEducation(props.initialValues.index, values)
    } catch (errorInfo) {
      console.log('Failed:', errorInfo)
    }
  }


  return (
    <Modal
      title="Update Education"
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
              <DatePicker picker="month" format="MMM YYYY" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="End Date"
              name="endDate"
              rules={[{ required: true, message: 'Please input a date' }]}
            >
              <DatePicker picker="month" format="MMM YYYY" />
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

export default UpdateEducationForm
