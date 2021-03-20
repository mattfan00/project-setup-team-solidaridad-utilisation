import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import './index.css'
import { Card, Col, Button, Form, Input,Checkbox } from 'antd';
import {
    Link,
} from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext"
import axios from "axios"


const ApplicantSignIn = () => {
    const history = useHistory()
    const { setUser } = useContext(AuthContext)

    const signin = async () => {
        console.log("set user")
        const result = await axios.get("https://6050e7e35346090017670c11.mockapi.io/user/1")
        setUser(result.data)

        history.push("/application/amazon/1")
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
        <div className="Applicant-SignIn-Card">
            <Col span={24}>
                <Card>
                    <div className="Applicant-SignIn-Words">
                        <h3>Express Apply</h3>
                        <p className="NoAccount">Don't have an account? <Link to="/application/signup">Sign up</Link></p>
                    </div>
                        <Form
                            {...layout}
                            name="basic"
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
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item {...layout} name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                        </Form>


                    <Button type="primary" block onClick={signin}>
                        Continue with Copply
                    </Button>
                </Card>
            </Col>
        </div>
    );
}

export default ApplicantSignIn