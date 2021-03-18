import React from "react";
import { Space, Card, Form, Button, Input, Divider, Col, Row, Checkbox } from "antd";
import "./index.css";

const DescriptionForm = () => {
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    return (
        <div>
        <Space direction="vertical" style={{ width:"50%" }}>
            <Card style={{ borderColor:"skyblue" }}>
                <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >      
                <Form.Item name="job-description">
                    <h3>Job Desription</h3>
                    <Input.TextArea rows={6} />
                </Form.Item>

                <Form.Item name="job-type">
                    <h3>Job Type</h3>
                    <Checkbox.Group style={{ width:"100%" }}>
                    <Row gutter={[0,24]}>
                        <Col span={6}>
                        <Checkbox value="full-time">
                            Full-time
                        </Checkbox>
                        </Col>
                        <Col span={6}>
                        <Checkbox value="part-time">
                            Part-time
                        </Checkbox>
                        </Col>
                        <Col span={6}>
                        <Checkbox value="contract">
                            Contract
                        </Checkbox>
                        </Col>
                        <Col span={6}>
                        <Checkbox value="freelance">
                            Freelance
                        </Checkbox>
                        </Col>
                    </Row>
                    </Checkbox.Group>
                </Form.Item>

                <Form.Item name="job-location">
                    <h3>Job Location</h3>
                    <Input.TextArea rows={2} />
                </Form.Item>

                <Form.Item name="job-location">
                    <h3>Desired Skills</h3>
                    <Input.TextArea rows={2} />
                </Form.Item>          

                <Divider></Divider>

                <Form.Item name="back-next-buttons">
                    <Button htmlType="submit" size="medium" style={{ backgroundColor:"lightgray" }}>
                    Back
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button type="primary" htmlType="submit" size="medium" 
                    style={{ backgroundColor:"skyblue", borderColor:"skyblue" }}>
                    Next
                    </Button>
                </Form.Item>
                </Form>
            </Card>
        </Space>
        </div>
    )
}

export default DescriptionForm