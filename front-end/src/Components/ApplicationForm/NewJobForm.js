import {
  Col,
  Form,
  Input,
  DatePicker,
  Button
} from "antd"

const NewJobForm = (props) => {
  const cancel = (e) => {
    e.stopPropagation()
    props.cancelJob()
  }

  const add = (e) => {
    e.stopPropagation()
    props.addJob()
  }

  return (
    <>
      <Col span={24}>
        <Form.Item
          label="Job Title"
          name="title"
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
          <DatePicker />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          label="End Date"
          name="endDate"
        >
          <DatePicker />
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
        <Button danger onClick={cancel}>Cancel</Button>
        <Button type="primary" onClick={add}>Add</Button>
      </Col>
    </>
  )
}

export default NewJobForm
