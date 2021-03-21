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
        <Space direction="vertical" style={{ width:"90%" }}>
            <Card style={{ borderColor:"#DADCFB", "margin-bottom":"5%" }}>
                <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >      
                <Form.Item name="job-description">
                    <h3 className="description-text">Job Desription</h3>
                    <Input.TextArea rows={4}/>
                </Form.Item>

                <Form.Item name="job-type">
                    <h3 className="description-text">Job Type</h3>
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
                    <h3 className="description-text">Job Location</h3>
                    <Input.TextArea rows={1} />
                </Form.Item>

                <Form.Item name="job-location">
                    <h3 className="description-text">Desired Skills</h3>
                    <Input.TextArea rows={1} />
                </Form.Item>          

                <Divider></Divider>

                <Form.Item name="back-next-buttons">
                    <Button htmlType="submit" size="medium" style={{ backgroundColor:"white", borderColor:"white" }}>
                    Back
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button type="primary" htmlType="submit" size="medium" 
                    style={{ backgroundColor:"#5D68EC", borderColor:"#5D68EC" }}>
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