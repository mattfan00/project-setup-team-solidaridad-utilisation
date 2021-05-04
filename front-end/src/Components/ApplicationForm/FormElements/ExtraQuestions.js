import React from "react"
import {
  Col,
  Form,
  Input,
  DatePicker,
  Radio
} from "antd"

const ExtraQuestions = (props) => {
  const getInputType = (type) => {
    switch (type) {
      case "singleLine":
        return <Input />
      case "multiline":
        return <Input.TextArea />
      case "date":
        return <DatePicker></DatePicker>
      case "yesNo":
        return <Radio.Group><Radio value="Yes" >Yes</Radio><Radio value="No" >No</Radio></Radio.Group>
    }
  }
  return (
    <>
      {props.questions.map((question, i) => (
      <Col span={24} key={i}>
        <Form.Item
          label={question.label}
          name={question.label}
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