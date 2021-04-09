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
        return <Radio.Group><Radio value={1} >Yes</Radio><Radio value={2} >No</Radio></Radio.Group>
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