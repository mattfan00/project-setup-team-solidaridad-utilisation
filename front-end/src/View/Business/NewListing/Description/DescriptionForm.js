import React, { useEffect, useState } from "react";
import { Space, Card, Form, Button, Input, Divider, Col, Row, Checkbox } from "antd";
import "../index.css";
import { formatCountdown } from "antd/lib/statistic/utils";

const DescriptionForm = ({
    handleNextButton,
    updateDescription,
    description
}) => {
    // const onFinish = (values: any) => {
    //   console.log('Success:', values);
    // };




    const [values, setValues] = useState({
        jobTitle: description.jobTitle,
        jobDescription: description.jobDescription,
        jobType: description.jobType,
        jobLocation: description.jobLocation,
        desiredSkills: description.desiredSkills
    })



    const update = async (e) => {
        try {
            console.log('Success:', values);
            updateDescription(
                {
                    jobTitle: values.jobTitle,
                    jobDescription: values.jobDescription,
                    jobType: values.jobType,
                    jobLocation: values.jobLocation,
                    desiredSkills: values.desiredSkills
                }
            );
            handleNextButton();
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    }

    return (
        <div>
        <Space direction="vertical" style={{ width:"50%" }}>
            <Card style={{ "margin-bottom":"5%" }}>
                <Form
                    name="basic"
                    onFinish={update}
                >
                    <Form.Item name="jobTitle">
                        <h3 className="description-text">Job Title</h3>
                        <Input defaultValue={description.jobTitle} onChange={(e)=>setValues({...values, jobTitle: e.target.value})} rows={4}/>
                    </Form.Item>

                    <Form.Item name="jobDescription">
                        <h3 className="description-text">Job Description</h3>
                        <Input.TextArea defaultValue={description.jobDescription} onChange={(e)=>setValues({...values, jobDescription: e.target.value})} rows={4}/>
                    </Form.Item>

                    <Form.Item name="jobType">
                        <h3 className="description-text">Job Type</h3>
                        <Checkbox.Group defaultValue={description.jobType} onChange={(value)=>setValues({...values, jobType: value})} style={{ width:"100%" }}>
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

                    <Form.Item name="jobLocation">
                        <h3 className="description-text">Job Location</h3>
                        <Input.TextArea defaultValue={description.jobLocation} onChange={(e)=>setValues({...values, jobLocation: e.target.value})} rows={1} />
                    </Form.Item>

                    <Form.Item name="desiredSkills">
                        <h3 className="description-text">Desired Skills</h3>
                        <Input.TextArea defaultValue={description.desiredSkills} onChange={(e)=>setValues({...values, desiredSkills: e.target.value})} rows={1} />
                    </Form.Item>

                    <Divider></Divider>

                    <Form.Item name="backNextButtons">
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