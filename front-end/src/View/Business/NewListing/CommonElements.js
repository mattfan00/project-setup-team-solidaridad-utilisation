import React from "react";
import { Space, Card, Form, Button, Checkbox, Col, Row, Divider } from "antd";
import "../NewListing/index.css";

const CommonElements = () => {
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    return (
        <div>
        <Space direction="vertical" style={{ width:"55%" }}>
            <Card style={{ borderColor:"orange" }}>
                <h3>Tick all the details you want to require:</h3>
                <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >      
                <Form.Item name="checkbox-group">
                <Checkbox.Group>
                <Row gutter={[0,8]}>
                    <Col span={12}>
                    <Checkbox value="firstName" style={{ lineHeight: '32px' }}>
                        First Name
                    </Checkbox>
                    </Col>
                    <Col span={12}>
                    <Checkbox value="lastName" style={{ lineHeight: '32px' }}>
                        Last Name
                    </Checkbox>
                    </Col>
                    <Col span={12}>
                    <Checkbox value="email" style={{ lineHeight: '32px' }}>
                        Email
                    </Checkbox>
                    </Col>
                    <Col span={12}>
                    <Checkbox value="address" style={{ lineHeight: '32px' }}>
                        Address
                    </Checkbox>
                    </Col>
                    <Col span={12}>
                    <Checkbox value="city" style={{ lineHeight: '32px' }}>
                        City
                    </Checkbox>
                    </Col>
                    <Col span={12}>
                    <Checkbox value="state" style={{ lineHeight: '32px' }}>
                        State
                    </Checkbox>
                    </Col>
                    <Col span={12}>
                    <Checkbox value="country" style={{ lineHeight: '32px' }}>
                        Country
                    </Checkbox>
                    </Col>
                    <Col span={12}>
                    <Checkbox value="postalCode" style={{ lineHeight: '32px' }}>
                        Postal Code
                    </Checkbox>
                    </Col>
                    <Col span={12}>
                    <Checkbox value="primaryPhone" style={{ lineHeight: '32px' }}>
                        Primary Phone
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
                    <Checkbox value="gender" style={{ lineHeight: '32px' }}>
                        Gender
                    </Checkbox>
                    </Col>
                    <Col span={12}>
                    <Checkbox value="graduation" style={{ lineHeight: '32px' }}>
                        Graduation Date
                    </Checkbox>
                    </Col>
                    <Col span={12}>
                    <Checkbox value="hispanicLatino" style={{ lineHeight: '32px' }}>
                        Hispanic/Latino
                    </Checkbox>
                    </Col>
                    <Col span={12}>
                    <Checkbox value="linkedin" style={{ lineHeight: '32px' }}>
                        Linkedin Profile
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
                <Form.Item>
                    <Button htmlType="submit" size="medium" style={{ backgroundColor:"lightgray" }}>
                    Back
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button type="primary" htmlType="submit" size="medium" 
                    style={{ backgroundColor:"orange", borderColor:"orange" }}>
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


/* <h3>Tick all the details you want to require:</h3>
<Checkbox.Group style={{ width: '70%' }} onChange={onChange}>
<Row gutter={[0,16]}>
    <Col span={12}>
    <Checkbox value="firstName">First Name</Checkbox>
    </Col>
    <Col span={12}>
    <Checkbox value="lastName">Last Name</Checkbox>
    </Col>
    <Col span={12}>
    <Checkbox value="gender">Gender</Checkbox>
    </Col>
    <Col span={12}>
    <Checkbox value="email">Email</Checkbox>
    </Col>
    <Col span={12}>
    <Checkbox value="address">Address</Checkbox>
    </Col>
    <Col span={12}>
    <Checkbox value="city">City</Checkbox>
    </Col>
    <Col span={12}>
    <Checkbox value="state">State</Checkbox>
    </Col>
    <Col span={12}>
    <Checkbox value="country">Country</Checkbox>
    </Col>
    <Col span={12}>
    <Checkbox value="postalCode">Postal Code</Checkbox>
    </Col>
    <Col span={12}>
    <Checkbox value="primaryPhone">Primary Phone</Checkbox>
    </Col>
    <Col span={12}>
    <Checkbox value="gradDate">Graduation Date</Checkbox>
    </Col>
    <Col span={12}>
    <Checkbox value="workEx">Work Experience</Checkbox>
    </Col>
    <Col span={12}>
    <Checkbox value="linkedin">Linkedin Profile</Checkbox>
    </Col>
    <Col span={12}>
    <Checkbox value="website">Website</Checkbox>
    </Col>
    <Col span={12}>
    <Checkbox value="veteran">Veteran Status</Checkbox>
    </Col>
    <Col span={12}>
    <Checkbox value="disability">Disability Status</Checkbox>
    </Col>
    <Col span={12}>
    <Checkbox value="hispanicLatino">Hispanice/Latino</Checkbox>
    </Col>
    <Col span={12}>
    <Checkbox value="workAuth">Work Authorization</Checkbox>
    </Col>
</Row>
</Checkbox.Group>
<div>
    <Button>Back</Button>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Button type="primary">Next</Button>
</div> */