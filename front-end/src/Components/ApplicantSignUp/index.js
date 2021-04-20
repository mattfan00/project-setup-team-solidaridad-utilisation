import React, { useContext } from "react"
import { useParams, useHistory } from "react-router-dom"
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
    const { setApplicantUser, setApplicantToken } = useContext(AuthContext)
    const { job } = useParams()

    const signup = async () => {
        try {
            const validateResult = await form.validateFields()
            console.log(validateResult)

            // sign up the user
            const result = await axios.post("http://localhost:4000/applicant/user/register", {
                email: validateResult.email,
                password: validateResult.password,
            })
            setApplicantUser(result.data.user)
            setApplicantToken(result.data.token)
            localStorage.setItem("applicantToken", result.data.token)

            history.push(`/application/amazon/${job}`)
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
                        <p className="NoAccount">Already have an account? <Link to={`/application/signup/job/${job}`}>Sign In</Link></p>
                    </div>
                        <Form
                            {...layout}
                            form={form}
                            initialValues={{
                                remember: true,
                            }}
                        >
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
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