import React, { useState } from "react";
import { Space, Card, Form, Button, Checkbox, Col, Row, Divider } from "antd";
import "../index.css";

const CommonElements = ({
    handleNextButton,
    handleBackButton,
    updateCommon,
    common
}) => {
    // const onFinish = (values: any) => {
    //   console.log('Success:', values);
    // };


    const commonO = common;

    const [values, setValues] = useState(commonO);


    // const checked = (value) => {
    //     if (common.indexOf(value) > -1) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    const update = async () => {
        try {
            console.log('Success:', values);
            updateCommon(values);
            handleNextButton();
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    }

    const updateBack = async () => {
        try {
            updateCommon(values);
            handleBackButton();
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    }

    return (
        <div>
        <Space direction="vertical" style={{ width:"50%" }}>
            <Card style={{ "margin-bottom":"5%" }}>
                <div className="elements-instruction">Tick all the details you want to require:</div>
                <br></br>
                <Form
                    onFinish={update}
                >
                    <Form.Item initialValue={common} name="checkbox-group">
                        <Checkbox.Group onChange={(value)=>setValues(value)}>
                            <Row gutter={[0,16]}>
                                {/* <Col span={12}>
                                <Checkbox value="name" style={{ lineHeight: '32px' }}>
                                    Name
                                </Checkbox>
                                </Col> */}
                                <Col span={12}>
                                <Checkbox value="gender" style={{ lineHeight: '32px' }}>
                                    Gender
                                </Checkbox>
                                </Col>
                                <Col span={12}>
                                <Checkbox value="address" style={{ lineHeight: '32px' }}>
                                    Address
                                </Checkbox>
                                </Col>
                                <Col span={12}>
                                <Checkbox value="email" style={{ lineHeight: '32px' }}>
                                    Email
                                </Checkbox>
                                </Col>
                                <Col span={12}>
                                <Checkbox value="primaryPhone" style={{ lineHeight: '32px' }}>
                                    Primary Phone
                                </Checkbox>
                                </Col>
                                <Col span={12}>
                                <Checkbox value="education" style={{ lineHeight: '32px' }}>
                                    Education
                                </Checkbox>
                                </Col>
                                <Col span={12}>
                                <Checkbox value="workEx" style={{ lineHeight: '32px' }}>
                                    Work Experience
                                </Checkbox>
                                </Col>
                                <Col span={12}>
                                <Checkbox value="workAuth" style={{ lineHeight: '32px' }}>
                                    Work Authorization
                                </Checkbox>
                                </Col>
                                <Col span={12}>
                                <Checkbox value="hispanicLatino" style={{ lineHeight: '32px' }}>
                                    Hispanic/Latino
                                </Checkbox>
                                </Col>
                                <Col span={12}>
                                <Checkbox value="linkedin" style={{ lineHeight: '32px' }}>
                                    Linkedin
                                </Checkbox>
                                </Col>
                                <Col span={12}>
                                <Checkbox value="website" style={{ lineHeight: '32px' }}>
                                    Website
                                </Checkbox>
                                </Col>
                                <Col span={12}>
                                <Checkbox value="veteran" style={{ lineHeight: '32px' }}>
                                    Veteran Status
                                </Checkbox>
                                </Col>
                                <Col span={12}>
                                <Checkbox value="disability" style={{ lineHeight: '32px' }}>
                                    Disability
                                </Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>
                    </Form.Item>
                    <Divider></Divider>
                    <Form.Item className="backNextButtons">
                        <Button type="default" onClick={updateBack} size="medium" style={{ backgroundColor:"white", borderColor:"white" }}>
                        Back
                        </Button>

                        <Button type="primary" htmlType="submit" size="medium"
                        style={{ backgroundColor:"#5D68EC", borderColor:"#5D68EC" }}>
                        Next
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Space>
        </div>
    );
}

export default CommonElements