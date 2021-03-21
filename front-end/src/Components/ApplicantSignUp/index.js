import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import './index.css'
import { Card, Col, Button, Form, Input, Checkbox, message } from 'antd';
import {
    Link,
} from "react-router-dom";
import axios from "axios"
import { AuthContext } from "../../Context/AuthContext";

const ApplicantSignUp = () => {
    const history = useHistory()
    const [form] = Form.useForm()
    const { setUser } = useContext(AuthContext)

    const signup = async () => {
        try {
            const validateResult = await form.validateFields()
            console.log(validateResult)

            // sign in the user
            const result = await axios.get("https://6050e7e35346090017670c11.mockapi.io/user/1")
            setUser(result.data)

            history.push("/application/amazon/1")
        } catch (errorInfo) {
            console.log('Failed:', errorInfo)
            message.error("Please fill out all of the required fields")
        }
    }

    const layout = {
        labelCol: {
            span: 24,
        },
        wrapperCol: {
            span: 24,
        },
    };

    return (
        <div className="Applicant-SignUp-Card">
            <Col span={24}>
                <Card>
                    <div className="Applicant-SignUp-Words">
                        <h3>Express Apply</h3>
                        <p className="NoAccount">Already have an account? <Link to="/application/signin">Sign In</Link></p>
                    </div>
                        <Form
                            {...layout}
                            form={form}
                            initialValues={{
                                remember: true,
                            }}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Set Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input a password',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                label="Confirm Password"
                                name="confirmPassword"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                          if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                          }
                                          return Promise.reject(new Error('The two passwords must match'));
                                        },
                                    })
                                ]
                                }
                            >
                                <Input.Password />
                            </Form.Item>
                        </Form>


                    <Button type="primary" block onClick={signup}>
                        Continue with Copply
                    </Button>
                </Card>
            </Col>
        </div>
    );
}

export default ApplicantSignUp