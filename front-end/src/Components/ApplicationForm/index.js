import React from "react"
import {
  Collapse,
  Button,
  Form,
  Input,
  Row,
  Col,
  Divider
} from "antd"

import Name from "./Name"
import Email from "./Email"
import Address from "./Address"
import WorkExperience from "./WorkExperience"

const { Panel } = Collapse


const ApplicationForm = () => {
  return (
    <>
      <Collapse
        // accordion
        defaultActiveKey={['1']}
        expandIconPosition="right"
        // bordered={false}
      >
        <Panel header="Applicant Details" key="1">
          <Form layout="vertical">
          <Row gutter={[16]}>
              <Name />
              <Email />
              <Address />
          </Row>
          </Form>

          <Divider>Work Experience</Divider>
          <WorkExperience />
        </Panel>
        <Panel header="Extra Questions" key="2">
          <Form layout="vertical">
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  label="Why do you want to join?"
                  name="why"
                >
                  <Input.TextArea />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Panel>
      </Collapse>

      <Button type="primary">Preview</Button>
    </>
  )
}

export default ApplicationForm