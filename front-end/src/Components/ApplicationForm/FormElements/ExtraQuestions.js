import React from "react"
import {
  Col,
  Form,
  Input
} from "antd"

const ExtraQuestions = (props) => {
  const getInputType = (type) => {
    switch (type) {
      case "text":
        return <Input />
      case "textarea":
        return <Input.TextArea />
    }
  }
  return (
    <>
      {props.questions.map(question => (
      <Col span={24} key={question.id}>
        <Form.Item
          label={question.label}
          name={question.id}
          rules={[{ required: question.required, message: 'Please fill out' }]}
        >
          {getInputType(question.type)}
        </Form.Item>
      </Col>
      ))}
    </>
  )
}

export default ExtraQuestions